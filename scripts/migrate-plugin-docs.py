# -*- coding: utf-8 -*-
"""迁移旧站渲染插件文档到新站 vitepress（一次性脚本，2026-08 核对）。"""
import pathlib
import re

SRC = pathlib.Path(r"D:\code\maptalks\progress\legacy-style")
DST = pathlib.Path(r"D:\code\maptalks-docs\docs\guide\style")

PAGES = [
    "plugin-fill.md", "plugin-line.md", "plugin-line-gradient.md",
    "plugin-icon.md", "plugin-text.md", "plugin-native-line.md",
    "plugin-native-point.md", "plugin-phong.md", "plugin-wireframe.md",
    "plugin-lit.md", "plugin-gltf-lit.md", "plugin-gltf-phong.md",
    "plugin-water.md",
]

TITLES = {
    "plugin-fill.md": "fill 渲染插件",
    "plugin-line.md": "line 渲染插件",
    "plugin-line-gradient.md": "line-gradient 渲染插件",
    "plugin-icon.md": "icon 渲染插件",
    "plugin-text.md": "text 渲染插件",
    "plugin-native-line.md": "native-line 渲染插件",
    "plugin-native-point.md": "native-point 渲染插件",
    "plugin-phong.md": "phong 渲染插件",
    "plugin-wireframe.md": "wireframe 渲染插件",
    "plugin-lit.md": "lit 渲染插件",
    "plugin-gltf-lit.md": "gltf-lit 渲染插件",
    "plugin-gltf-phong.md": "gltf-phong 渲染插件",
    "plugin-water.md": "water 渲染插件",
}

# 旧站相对链接 -> 新站绝对路径（按长到短排序，避免子串误替换）
LINK_MAP = [
    ("../filter/feature-filter", "/api/feature-filter"),
    ("../filter/function-type", "/api/function-type"),
    ("../symbols#polygon样式属性", "/api/symbols#polygon样式属性"),
    ("../symbols#line样式属性", "/api/symbols#line样式属性"),
    ("../symbols#marker样式属性", "/api/symbols#marker样式属性"),
    ("../symbols#text样式属性", "/api/symbols#text样式属性"),
    ("../material#pbr材质", "/api/material#pbr材质"),
    ("../api/vt/assets/line-text.jpg", "/api/assets/line-text.jpg"),
    ("../plugin-icon", "/guide/style/plugin-icon"),
]

AUDIT_LINE = "> 本文档已与 @maptalks/gl-layers 2026 源码核对（api-notes-vt-gl.md）"
NEW_PLUGIN_NOTE = (
    "> 注：新版本还有 tube/heatmap/billboard/terrain-flat-mask 渲染插件，"
    "暂无独立文档（2026 核对）"
)


def fix_links(content: str) -> str:
    for old, new in LINK_MAP:
        content = content.replace(old, new)
    return content


def convert_includes(content: str) -> str:
    """{@include: includes/X.md} -> <!--@include: ./includes/X.md-->，保留行首缩进。"""
    return re.sub(
        r"^(\s*)\{@include:\s*includes/([\w.\-]+)\.md\}",
        lambda m: m.group(1) + "<!--@include: ./includes/" + m.group(2) + ".md-->",
        content,
        flags=re.M,
    )


def convert_containers(content: str) -> str:
    """:::note/info/warning -> > [!NOTE]/[!INFO]/[!WARNING]（含结束符删除）。"""
    type_map = {"note": "NOTE", "info": "INFO", "warning": "WARNING"}
    lines = content.split("\n")
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r"^:::(\w+)\s*$", line.strip())
        if m and m.group(1) in type_map:
            tag = type_map[m.group(1)]
            out.append(f"> [!{tag}]")
            i += 1
            while i < len(lines) and lines[i].strip() != ":::":
                if lines[i].strip():
                    out.append("> " + lines[i])
                else:
                    out.append(">")
                i += 1
            i += 1  # 跳过 ::: 结束符
            continue
        out.append(line)
        i += 1
    return "\n".join(out)


def convert_page(name: str) -> str:
    content = (SRC / name).read_text(encoding="utf-8")
    content = convert_includes(content)
    content = convert_containers(content)
    content = fix_links(content)
    if name == "plugin-native-line.md":
        # 旧站笔误：native-line 页面 renderPlugin.type 误写为 native-point
        content = content.replace(
            '    // [必填] 插件类型，固定为line\n    type: "native-point",',
            '    // [必填] 插件类型，固定为line\n    type: "native-line",',
        )
    frontmatter = f"---\ntitle: {TITLES[name]}\n---\n\n"
    content = frontmatter + content
    content = content.rstrip("\n") + "\n"
    if name == "plugin-lit.md":
        content = content.rstrip("\n") + "\n\n" + NEW_PLUGIN_NOTE + "\n"
    content = content.rstrip("\n") + "\n\n" + AUDIT_LINE + "\n"
    return content


def main() -> None:
    DST.mkdir(parents=True, exist_ok=True)
    inc_dst = DST / "includes"
    inc_dst.mkdir(parents=True, exist_ok=True)

    for name in PAGES:
        out = convert_page(name)
        (DST / name).write_text(out, encoding="utf-8")
        print(f"page  {name}")

    # includes：原样复制；仅两处例外（见汇报）：
    # 1. text-symbols-category.md 的 Docusaurus :::note 容器
    # 2. 两处旧站相对链接 ../filter/function-type
    includes = [
        "extrusion-dataconfig.md", "fill-supports.md", "line-supports.md",
        "plugin-common-sceneConfig.md", "plugin-gltf-content.md",
        "point-supports.md", "text-symbols-category.md",
    ]
    for name in includes:
        content = (SRC / "includes" / name).read_text(encoding="utf-8")
        content = convert_containers(content)
        content = fix_links(content)
        (inc_dst / name).write_text(content, encoding="utf-8")
        print(f"include {name}")


if __name__ == "__main__":
    main()
