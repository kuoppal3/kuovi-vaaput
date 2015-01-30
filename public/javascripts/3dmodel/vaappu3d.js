// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer;

init();
animate();

// Sets up the scene.
function init() {
    // Col-md-9 element
    var colmd = document.getElementById("colmd");
    
    scene = new THREE.Scene();
    
    // Sets width and the height of the renderer
    var WIDTH = colmd.clientWidth - 50,
        HEIGHT = colmd.clientWidth / 3;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    
    renderer.setSize(WIDTH, HEIGHT);
    colmd.appendChild(renderer.domElement);
    renderer.domElement.id = "colmd";
    
    // Eventlistener which resizes renderer's size when the browserwindow is resized
    window.addEventListener('resize', function() {
      var WIDTH = colmd.clientWidth - 50,
          HEIGHT = colmd.clientWidth / 3;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });
    
    camera = new THREE.PerspectiveCamera(35, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(8,-3,-3);
    scene.add(camera);
    
    // Backgroundcolor and the light
    renderer.setClearColorHex(0xe5e5e5, 1);
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    // Load json luremodel
    var loader = new THREE.JSONLoader();
    loader.load( '/javascripts/models/120mm_model.js', function(geometry) {
        var texture = THREE.ImageUtils.loadTexture( '/javascripts/models/120mm_texture.jpg' );
        var material = new THREE.MeshBasicMaterial( { map: texture } );
        var mesh = new THREE.Mesh( geometry, material);
        scene.add(mesh);
    });
    
    // OrbitControls to control the camera
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

// Renders the scene and updates the render as needed.
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();
}