// $(function() {
//     let scene = new THREE.Scene();
//     let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
//     let renderer = new THREE.WebGLRenderer();
//
//     renderer.setClearColor(0xdddddd)
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.shadowMapEnabled = true;
//     renderer.shadowMapSoft = true;
//
//     let axis = new THREE.AxisHelper(10);
//     scene.add(axis);
//
//     let grid = new THREE.GridHelper(10, 10);
//     // scene.add(grid);
//
//     let cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
//     let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff3300 });
//     let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//     cube.castShadow = true;
//     scene.add(cube);
//
//
//     let planeGeometry = new THREE.PlaneGeometry(30, 30, 30);
//     let planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
//     let plane = new THREE.Mesh(planeGeometry, planeMaterial);
//
//     plane.rotation.x = -.5 * Math.PI;
//     plane.receiveShadow = true;
//     scene.add(plane);
//
//     /*Lights*/
//     let ambient = new THREE.AmbientLight(0x404040);
//     scene.add(ambient)
//
//     let spotLight = new THREE.SpotLight(0xffffff);
//     spotLight.position.set(10, 30, 50);
//     spotLight.castShadow = true;
//     scene.add(spotLight);
//
//     cube.position.x = 2.5;
//     cube.position.y = 2.5;
//     cube.position.z = 2.5;
//
//     camera.position.x = 40;
//     camera.position.y = 40;
//     camera.position.z = 40;
//     camera.lookAt(scene.position);
//
//     renderer.render(scene, camera);
//
//     document.body.appendChild(renderer.domElement);
// });
$(function() {

    /*global variables*/
    let scene, camera, renderer;
    let controls;
    let axis, grid, color;
    let spotLight, cube;
    let SCREEN_WIDTH, SCREEN_HEIGHT;
    let main = document.querySelector('.main');


    function init() {
        /*creates empty scene object and renderer*/
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(45, main.clientWidth / main.clientHeight, .1, 500);
        renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setClearColor(0xdddddd);
        renderer.setSize(main.clientWidth, main.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMapSoft = true;

        /*add controls*/
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', render);

        /*adds helpers*/
        // axis = new THREE.AxisHelper(10);
        // scene.add(axis);
        //
        // grid = new THREE.GridHelper(50, 5);
        // color = new THREE.Color("rgb(255,0,0)");
        // grid.setColors(color, 0x000000);
        // scene.add(grid);

        /*Camera*/
        camera.position.x = 15;
        camera.position.y = 12;
        camera.position.z = 10;
        camera.lookAt(scene.position);

        /*Lights*/
        let ambient = new THREE.AmbientLight(0x404040);
        scene.add(ambient);

        spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(10, 10, 15);
        spotLight.castShadow = true;
        spotLight.shadowCameraNear = 8;
        spotLight.shadowCameraFar = 30;
        spotLight.shadowDarkness = 0.5;
        spotLight.shadowCameraVisible = false;
        spotLight.shadowMapWidth = 1024;
        spotLight.shadowMapHeight = 1024;
        spotLight.name = 'Spot Light';
        scene.add(spotLight);

        /*Ground*/
        let Ground_geometry = new THREE.BoxGeometry(20, 0.1, 20);
        let Ground_material = new THREE.MeshPhongMaterial({
            color: 0xa0adaf,
            shininess: 150,
            specular: 0xffffff,
            shading: THREE.SmoothShading
        });

        let ground = new THREE.Mesh(Ground_geometry, Ground_material);
        ground.scale.multiplyScalar(3);
        ground.castShadow = false;
        ground.receiveShadow = true;
        scene.add(ground);

        /*Box*/
        let Box_material = new THREE.MeshPhongMaterial({
            color: 0xff0000,
            shininess: 150,
            specular: 0x222222,
            shading: THREE.SmoothShading,
        });
        let Box_geometry = new THREE.BoxGeometry(3, 3, 3);
        cube = new THREE.Mesh(Box_geometry, Box_material);
        cube.position.set(0, 1.6, 0);
        cube.castShadow = true;
        cube.receiveShadow = true;
        scene.add(cube);


        $(".main").append(renderer.domElement);

    }

    function render() {
    }

    function animate() {
        requestAnimationFrame(animate);
        render();

        renderer.render(scene, camera);
    }

    init();
    animate();

    $(window).resize(function() {
        SCREEN_WIDTH = main.clientWidth;
        SCREEN_HEIGHT = main.clientHeight;
        camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        camera.updateProjectionMatrix();
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    });

});


