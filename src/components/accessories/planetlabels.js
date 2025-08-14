
import * as THREE from 'three';
function createLabel(text, position, sectionId) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = "Bold 70px 'Beauty Glitch Demo'";
    context.fillStyle = "white";
    context.fillText(text, 0, 50);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(3, 2, 1); // Adjust size
    sprite.position.copy(position.clone().add(new THREE.Vector3(1, 0.7, 0))); // Place above the planet
    sprite.userData = { sectionId }; // Attach section target
    return sprite;
}

export default createLabel;
