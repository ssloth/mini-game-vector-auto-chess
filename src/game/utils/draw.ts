import * as THREE from 'three';
export const drawPolygon = (number: number, r = 3) => {
  const rectShape = new THREE.Shape();
  rectShape.moveTo(Math.sin(0), -Math.cos(0) * r);
  const angle = (2 * Math.PI) / number;
  for (let i = 1; i < number; i++) {
    const x = Math.sin(angle * i) * r;
    const y = -Math.cos(angle * i) * r;
    rectShape.lineTo(x, y);
  }
  rectShape.lineTo(Math.sin(0), -Math.cos(0) * r);

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
  });
  const materiala = new THREE.Mesh(new THREE.ShapeGeometry(rectShape), material);
  materiala.position.x = 0;
  materiala.position.y = 0;
  materiala.position.z = 1.1;
  return materiala;
};
