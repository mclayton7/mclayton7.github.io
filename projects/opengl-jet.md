---
layout: project
type: project
publish: true

title: Rendering a 3D model using OpenGL
languages: [C++, OpenGL]
cover_image:

excerpt: "Parsing and rendering a Wavefront OBJ file using OpenGL"
github: "https://github.com/mclayton7/OpenGLJet"

sources: ["http://en.wikipedia.org/wiki/Wavefront_.obj_file", "http://users.ece.gatech.edu/~riley/ece4893/"]

author:
  name: Mac Clayton
---

#Intro
This project focuses using the OpenGL graphics API to generate and display a 3-D image of a Fighter Jet. The Jet data is stored is a [Wavefront .obj](http://en.wikipedia.org/wiki/Wavefront_.obj_file) file, which has a very specific layout.

#Parsing the .obj File
This application can be broken into three sections, reading (parsing) the file, rendering the result, and handling the user interactions. To parse the .obj file, we'll use the `ifstream` library from the [Standard Template Library](http://en.wikipedia.org/wiki/Standard_Template_Library).

#Rendering

#Result
The resulting render. Use the following keys to interact with the display:
* `x` - rotate areound the X-axis
* `y` - rotate around the Y-axis
* `z` - rotate around the Z-axis
* `S` - Zoom in (uppercase S)
* `s` - Zoom out (lowercase s)
* `r` - Reset the rotations (does not reset the zoom level)
<img src="/images/projects/jet/jet-output.png" class="center">