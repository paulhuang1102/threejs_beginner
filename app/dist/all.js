'use strict';

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
$(function () {

        /*global variables*/
        var scene = void 0,
            camera = void 0,
            renderer = void 0;
        var controls = void 0;
        var axis = void 0,
            grid = void 0,
            color = void 0;
        var spotLight = void 0,
            cube = void 0;
        var SCREEN_WIDTH = void 0,
            SCREEN_HEIGHT = void 0;
        var main = document.querySelector('.main');

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
                var ambient = new THREE.AmbientLight(0x404040);
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
                var Ground_geometry = new THREE.BoxGeometry(20, 0.1, 20);
                var Ground_material = new THREE.MeshPhongMaterial({
                        color: 0xa0adaf,
                        shininess: 150,
                        specular: 0xffffff,
                        shading: THREE.SmoothShading
                });

                var ground = new THREE.Mesh(Ground_geometry, Ground_material);
                ground.scale.multiplyScalar(3);
                ground.castShadow = false;
                ground.receiveShadow = true;
                scene.add(ground);

                /*Box*/
                var Box_material = new THREE.MeshPhongMaterial({
                        color: 0xff0000,
                        shininess: 150,
                        specular: 0x222222,
                        shading: THREE.SmoothShading
                });
                var Box_geometry = new THREE.BoxGeometry(3, 3, 3);
                cube = new THREE.Mesh(Box_geometry, Box_material);
                cube.position.set(0, 1.6, 0);
                cube.castShadow = true;
                cube.receiveShadow = true;
                scene.add(cube);

                $(".main").append(renderer.domElement);
        }

        function render() {}

        function animate() {
                requestAnimationFrame(animate);
                render();

                renderer.render(scene, camera);
        }

        init();
        animate();

        $(window).resize(function () {
                SCREEN_WIDTH = main.clientWidth;
                SCREEN_HEIGHT = main.clientHeight;
                camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
                camera.updateProjectionMatrix();
                renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC5qcyJdLCJuYW1lcyI6WyIkIiwic2NlbmUiLCJjYW1lcmEiLCJyZW5kZXJlciIsImNvbnRyb2xzIiwiYXhpcyIsImdyaWQiLCJjb2xvciIsInNwb3RMaWdodCIsImN1YmUiLCJTQ1JFRU5fV0lEVEgiLCJTQ1JFRU5fSEVJR0hUIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluaXQiLCJUSFJFRSIsIlNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRDbGVhckNvbG9yIiwic2V0U2l6ZSIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJzaGFkb3dNYXBTb2Z0IiwiT3JiaXRDb250cm9scyIsImRvbUVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJsb29rQXQiLCJhbWJpZW50IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiU3BvdExpZ2h0Iiwic2V0IiwiY2FzdFNoYWRvdyIsInNoYWRvd0NhbWVyYU5lYXIiLCJzaGFkb3dDYW1lcmFGYXIiLCJzaGFkb3dEYXJrbmVzcyIsInNoYWRvd0NhbWVyYVZpc2libGUiLCJzaGFkb3dNYXBXaWR0aCIsInNoYWRvd01hcEhlaWdodCIsIm5hbWUiLCJHcm91bmRfZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIkdyb3VuZF9tYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwic2hpbmluZXNzIiwic3BlY3VsYXIiLCJzaGFkaW5nIiwiU21vb3RoU2hhZGluZyIsImdyb3VuZCIsIk1lc2giLCJzY2FsZSIsIm11bHRpcGx5U2NhbGFyIiwicmVjZWl2ZVNoYWRvdyIsIkJveF9tYXRlcmlhbCIsIkJveF9nZW9tZXRyeSIsImFwcGVuZCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJyZXNpemUiLCJhc3BlY3Qi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QUFGLEVBQVdpRSxNQUFYLENBQWtCOUQsU0FBUzBCLFVBQTNCO0FBRUg7O0FBRUQsaUJBQVNFLE1BQVQsR0FBa0IsQ0FDakI7O0FBRUQsaUJBQVNtQyxPQUFULEdBQW1CO0FBQ2ZDLHNDQUFzQkQsT0FBdEI7QUFDQW5DOztBQUVBNUIseUJBQVM0QixNQUFULENBQWdCOUIsS0FBaEIsRUFBdUJDLE1BQXZCO0FBQ0g7O0FBRURhO0FBQ0FtRDs7QUFFQWxFLFVBQUVvRSxNQUFGLEVBQVVDLE1BQVYsQ0FBaUIsWUFBVztBQUN4QjNELCtCQUFlRSxLQUFLTyxXQUFwQjtBQUNBUixnQ0FBZ0JDLEtBQUtRLFlBQXJCO0FBQ0FsQix1QkFBT29FLE1BQVAsR0FBZ0I1RCxlQUFlQyxhQUEvQjtBQUNBVCx1QkFBT3FFLHNCQUFQO0FBQ0FwRSx5QkFBU3FCLE9BQVQsQ0FBaUJkLFlBQWpCLEVBQStCQyxhQUEvQjtBQUNILFNBTkQ7QUFRSCxDQWhIRCIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgbGV0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbi8vICAgICBsZXQgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCA1MDApO1xyXG4vLyAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcclxuLy9cclxuLy8gICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhkZGRkZGQpXHJcbi8vICAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4vLyAgICAgcmVuZGVyZXIuc2hhZG93TWFwRW5hYmxlZCA9IHRydWU7XHJcbi8vICAgICByZW5kZXJlci5zaGFkb3dNYXBTb2Z0ID0gdHJ1ZTtcclxuLy9cclxuLy8gICAgIGxldCBheGlzID0gbmV3IFRIUkVFLkF4aXNIZWxwZXIoMTApO1xyXG4vLyAgICAgc2NlbmUuYWRkKGF4aXMpO1xyXG4vL1xyXG4vLyAgICAgbGV0IGdyaWQgPSBuZXcgVEhSRUUuR3JpZEhlbHBlcigxMCwgMTApO1xyXG4vLyAgICAgLy8gc2NlbmUuYWRkKGdyaWQpO1xyXG4vL1xyXG4vLyAgICAgbGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg1LCA1LCA1KTtcclxuLy8gICAgIGxldCBjdWJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjMzMDAgfSk7XHJcbi8vICAgICBsZXQgY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcclxuLy8gICAgIGN1YmUuY2FzdFNoYWRvdyA9IHRydWU7XHJcbi8vICAgICBzY2VuZS5hZGQoY3ViZSk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICBsZXQgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDMwLCAzMCwgMzApO1xyXG4vLyAgICAgbGV0IHBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYgfSk7XHJcbi8vICAgICBsZXQgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKTtcclxuLy9cclxuLy8gICAgIHBsYW5lLnJvdGF0aW9uLnggPSAtLjUgKiBNYXRoLlBJO1xyXG4vLyAgICAgcGxhbmUucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbi8vICAgICBzY2VuZS5hZGQocGxhbmUpO1xyXG4vL1xyXG4vLyAgICAgLypMaWdodHMqL1xyXG4vLyAgICAgbGV0IGFtYmllbnQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4NDA0MDQwKTtcclxuLy8gICAgIHNjZW5lLmFkZChhbWJpZW50KVxyXG4vL1xyXG4vLyAgICAgbGV0IHNwb3RMaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhmZmZmZmYpO1xyXG4vLyAgICAgc3BvdExpZ2h0LnBvc2l0aW9uLnNldCgxMCwgMzAsIDUwKTtcclxuLy8gICAgIHNwb3RMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuLy8gICAgIHNjZW5lLmFkZChzcG90TGlnaHQpO1xyXG4vL1xyXG4vLyAgICAgY3ViZS5wb3NpdGlvbi54ID0gMi41O1xyXG4vLyAgICAgY3ViZS5wb3NpdGlvbi55ID0gMi41O1xyXG4vLyAgICAgY3ViZS5wb3NpdGlvbi56ID0gMi41O1xyXG4vL1xyXG4vLyAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSA0MDtcclxuLy8gICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XHJcbi8vICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDQwO1xyXG4vLyAgICAgY2FtZXJhLmxvb2tBdChzY2VuZS5wb3NpdGlvbik7XHJcbi8vXHJcbi8vICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbi8vXHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4vLyB9KTtcclxuJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvKmdsb2JhbCB2YXJpYWJsZXMqL1xyXG4gICAgbGV0IHNjZW5lLCBjYW1lcmEsIHJlbmRlcmVyO1xyXG4gICAgbGV0IGNvbnRyb2xzO1xyXG4gICAgbGV0IGF4aXMsIGdyaWQsIGNvbG9yO1xyXG4gICAgbGV0IHNwb3RMaWdodCwgY3ViZTtcclxuICAgIGxldCBTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQ7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgLypjcmVhdGVzIGVtcHR5IHNjZW5lIG9iamVjdCBhbmQgcmVuZGVyZXIqL1xyXG4gICAgICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCBtYWluLmNsaWVudFdpZHRoIC8gbWFpbi5jbGllbnRIZWlnaHQsIC4xLCA1MDApO1xyXG4gICAgICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbnRpYWxpYXM6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhkZGRkZGQpO1xyXG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUobWFpbi5jbGllbnRXaWR0aCwgbWFpbi5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICByZW5kZXJlci5zaGFkb3dNYXBTb2Z0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLyphZGQgY29udHJvbHMqL1xyXG4gICAgICAgIGNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICBjb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCByZW5kZXIpO1xyXG5cclxuICAgICAgICAvKmFkZHMgaGVscGVycyovXHJcbiAgICAgICAgLy8gYXhpcyA9IG5ldyBUSFJFRS5BeGlzSGVscGVyKDEwKTtcclxuICAgICAgICAvLyBzY2VuZS5hZGQoYXhpcyk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBncmlkID0gbmV3IFRIUkVFLkdyaWRIZWxwZXIoNTAsIDUpO1xyXG4gICAgICAgIC8vIGNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKFwicmdiKDI1NSwwLDApXCIpO1xyXG4gICAgICAgIC8vIGdyaWQuc2V0Q29sb3JzKGNvbG9yLCAweDAwMDAwMCk7XHJcbiAgICAgICAgLy8gc2NlbmUuYWRkKGdyaWQpO1xyXG5cclxuICAgICAgICAvKkNhbWVyYSovXHJcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSAxNTtcclxuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEyO1xyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTA7XHJcbiAgICAgICAgY2FtZXJhLmxvb2tBdChzY2VuZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgIC8qTGlnaHRzKi9cclxuICAgICAgICBsZXQgYW1iaWVudCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHg0MDQwNDApO1xyXG4gICAgICAgIHNjZW5lLmFkZChhbWJpZW50KTtcclxuXHJcbiAgICAgICAgc3BvdExpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZik7XHJcbiAgICAgICAgc3BvdExpZ2h0LnBvc2l0aW9uLnNldCgxMCwgMTAsIDE1KTtcclxuICAgICAgICBzcG90TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgc3BvdExpZ2h0LnNoYWRvd0NhbWVyYU5lYXIgPSA4O1xyXG4gICAgICAgIHNwb3RMaWdodC5zaGFkb3dDYW1lcmFGYXIgPSAzMDtcclxuICAgICAgICBzcG90TGlnaHQuc2hhZG93RGFya25lc3MgPSAwLjU7XHJcbiAgICAgICAgc3BvdExpZ2h0LnNoYWRvd0NhbWVyYVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBzcG90TGlnaHQuc2hhZG93TWFwV2lkdGggPSAxMDI0O1xyXG4gICAgICAgIHNwb3RMaWdodC5zaGFkb3dNYXBIZWlnaHQgPSAxMDI0O1xyXG4gICAgICAgIHNwb3RMaWdodC5uYW1lID0gJ1Nwb3QgTGlnaHQnO1xyXG4gICAgICAgIHNjZW5lLmFkZChzcG90TGlnaHQpO1xyXG5cclxuICAgICAgICAvKkdyb3VuZCovXHJcbiAgICAgICAgbGV0IEdyb3VuZF9nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgyMCwgMC4xLCAyMCk7XHJcbiAgICAgICAgbGV0IEdyb3VuZF9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIGNvbG9yOiAweGEwYWRhZixcclxuICAgICAgICAgICAgc2hpbmluZXNzOiAxNTAsXHJcbiAgICAgICAgICAgIHNwZWN1bGFyOiAweGZmZmZmZixcclxuICAgICAgICAgICAgc2hhZGluZzogVEhSRUUuU21vb3RoU2hhZGluZ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgZ3JvdW5kID0gbmV3IFRIUkVFLk1lc2goR3JvdW5kX2dlb21ldHJ5LCBHcm91bmRfbWF0ZXJpYWwpO1xyXG4gICAgICAgIGdyb3VuZC5zY2FsZS5tdWx0aXBseVNjYWxhcigzKTtcclxuICAgICAgICBncm91bmQuY2FzdFNoYWRvdyA9IGZhbHNlO1xyXG4gICAgICAgIGdyb3VuZC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBzY2VuZS5hZGQoZ3JvdW5kKTtcclxuXHJcbiAgICAgICAgLypCb3gqL1xyXG4gICAgICAgIGxldCBCb3hfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBjb2xvcjogMHhmZjAwMDAsXHJcbiAgICAgICAgICAgIHNoaW5pbmVzczogMTUwLFxyXG4gICAgICAgICAgICBzcGVjdWxhcjogMHgyMjIyMjIsXHJcbiAgICAgICAgICAgIHNoYWRpbmc6IFRIUkVFLlNtb290aFNoYWRpbmcsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IEJveF9nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgzLCAzLCAzKTtcclxuICAgICAgICBjdWJlID0gbmV3IFRIUkVFLk1lc2goQm94X2dlb21ldHJ5LCBCb3hfbWF0ZXJpYWwpO1xyXG4gICAgICAgIGN1YmUucG9zaXRpb24uc2V0KDAsIDEuNiwgMCk7XHJcbiAgICAgICAgY3ViZS5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBjdWJlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgIHNjZW5lLmFkZChjdWJlKTtcclxuXHJcblxyXG4gICAgICAgICQoXCIubWFpblwiKS5hcHBlbmQocmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICByZW5kZXIoKTtcclxuXHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTtcclxuICAgIGFuaW1hdGUoKTtcclxuXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFNDUkVFTl9XSURUSCA9IG1haW4uY2xpZW50V2lkdGg7XHJcbiAgICAgICAgU0NSRUVOX0hFSUdIVCA9IG1haW4uY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGNhbWVyYS5hc3BlY3QgPSBTQ1JFRU5fV0lEVEggLyBTQ1JFRU5fSEVJR0hUO1xyXG4gICAgICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShTQ1JFRU5fV0lEVEgsIFNDUkVFTl9IRUlHSFQpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
