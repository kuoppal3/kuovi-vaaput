// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer;

init();
animate();

// Sets up the scene.
function init() {
    // Col-md-9
    var colmd = document.getElementById("colmd");
    
    // Create the scene and set the scene size.
    scene = new THREE.Scene();
    var WIDTH = colmd.clientWidth - 50,
        HEIGHT = colmd.clientWidth / 3;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    
    renderer.setSize(WIDTH, HEIGHT);
    colmd.appendChild(renderer.domElement);
    renderer.domElement.id = "colmd";
    
    // When browser window is resized, resize the renderer
    window.addEventListener('resize', function() {
      var WIDTH = colmd.clientWidth - 50,
          HEIGHT = colmd.clientWidth / 3;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    });
    
    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(35, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(4,1,-3);
    scene.add(camera);
    
    // Backgroundcolor and light
    renderer.setClearColorHex(0xe5e5e5, 1);
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100,200,100);
    scene.add(light);

    // Add a white PointLight to the scene.
    var loader = new THREE.JSONLoader();
        loader.load( '/javascripts/models/120mm_model2.json', function(geometry){

        var texture = THREE.ImageUtils.loadTexture( '/javascripts/models/120mmtexture9.png' );
        var material = new THREE.MeshBasicMaterial( { map: texture } );

        var mesh = new THREE.Mesh( geometry, material);
        scene.add(mesh);
        
    });
    
    // Add OrbitControls so that we can pan around with the mouse.
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

// Renders the scene and updates the render as needed.
function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  controls.update();
}











/*var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();

// Col-md-9
var colmd = document.getElementById("colmd");
colmd.appendChild( renderer.domElement );

// Sets width and the height of the renderer
var WIDTH = colmd.clientWidth - 50,
    HEIGHT = colmd.clientWidth / 2;
renderer.setSize(WIDTH, HEIGHT);

// Eventlistener which resizes renderer's size when window is resized
window.addEventListener('resize', function() {
    WIDTH = colmd.clientWidth - 50;
    HEIGHT = colmd.clientWidth / 2;

    renderer.setSize(WIDTH, HEIGHT);
    camera.updateProjectionMatrix();
});

// Backgroundcolor and light
renderer.setClearColorHex(0xe5e5e5, 1);

// Load json luremodel
var loader = new THREE.JSONLoader();
loader.load("http://codepen.io/nickpettit/pen/nqyaK.js", function(geometry) {
    var material = new THREE.MeshLambertMaterial({color: 0x55B663})
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
});

controls = new THREE.OrbitControls(camera, renderer.domElement);
*/