export const fragmentShaderCode = `
precision highp float;

uniform float u_color;

varying float v_t;

const float PI = 3.14159265359;

vec3 cubehelix(float x, float y, float z) {
  float a = y * z * (1.0 - z);
  float c = cos(x + PI / 2.0);
  float s = sin(x + PI / 2.0);
  return vec3(
    z + a * (1.78277 * s - 0.14861 * c),
    z - a * (0.29227 * c + 0.90649 * s),
    z + a * (1.97294 * c)
  );
}

vec3 rainbow(float t) {
  if (t < 0.0 || t > 1.0) t -= floor(t);
  float ts = abs(t - 0.5);
  return cubehelix(
    (360.0 * t - 100.0) / 180.0 * PI,
    1.5 - 1.5 * ts,
    u_color - 0.9 * ts
  );
}

void main() {
  gl_FragColor = vec4(rainbow(v_t / 4.0 + 0.25), 1.0);
}
`;

export const vertexShaderCode = `
precision highp float;

const float PI = 3.14159265359;

uniform float u_pointSize;
uniform float u_a;
uniform float u_b;
uniform float u_c;
uniform float u_d;

attribute vec2 a_position;

varying float v_t;

void main() {
float x1, x2 = a_position.x;
float y1, y2 = a_position.y;
for (int i = 0; i < 8; i++) {
  x1 = x2, y1 = y2;
  x2 = sin(u_a * y1) - cos(u_b * x1);
  y2 = sin(u_c * x1) - cos(u_d * y1);
}
v_t = atan(a_position.y, a_position.x) / PI;
gl_Position = vec4(x2 / 2.0, y2 / 2.0, 0.0, 1.0);
gl_PointSize = u_pointSize;
}
`;
