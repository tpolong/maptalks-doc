      // [Optional] Default: "one"
      // The src parameter of the WebGL blendEquation; possible values:
      // 0, 1, "src color", "one minus src color", "src alpha", "one minus dst color", "dst alpha",
      // "one minus dst alpha", "constant color", "one minus constant color", "constant alpha",
      // "one minus constant alpha", "src alpha saturate"
      blendSrc: "one",
      // [Optional] Default: "one minus src alpha"
      // The dst parameter of the WebGL blendEquation; possible values:
      // 0, 1, "src color", "one minus src color", "src alpha", "one minus dst color", "dst alpha",
      // "one minus dst alpha", "constant color", "one minus constant color", "constant alpha",
      // "one minus constant alpha", "src alpha saturate"
      blendDst: "one minus src alpha",
      // [Optional] Default: [0, 1]
      // The WebGL depth value range
      depthRange: [0, 1],
      // [Optional] Default: null
      // A feature-filter expression; data matching the condition will not be rendered
      excludes: null
