
		
			var bFireDetectObjectsUnderMouse = false;
			var antDegrees = 0.0;
			var myheight = window.innerHeight*1;
			var mywidth = window.innerWidth*1;
			//var myheight = '900';
			//var mywidth = '900';

			var bDirR = true;
			var antzdiff=0;
		
			var scene = new THREE.Scene();
			var camera2 = new THREE.PerspectiveCamera()
			var camera = new THREE.PerspectiveCamera( 75, (mywidth/myheight), 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			var ant3dMouse = new THREE.Vector2();


		
			renderer.setSize( mywidth, myheight );
			document.getElementById("rightherebaby").appendChild(renderer.domElement);
			//document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 3, 3, 3 );
			var geometry2 = new THREE.BoxGeometry( 3, 3, 3 );
			//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

			THREE.ImageUtils.crossOrigin = '';
			//var texture = THREE.ImageUtils.loadTexture('https://media.giphy.com/media/mXr3CMpXXdNJK/giphy.gif');

			//var image = document.createElement( 'img' );
			//image.src = './images/Babyaby.png';
			//image.crossOrigin='anonymous';	
			var texture = THREE.ImageUtils.loadTexture('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYD53PyXYNCHIlXCCr3yPGn7iYcz7EInfHdxavneEHhAVL-PBB');
			var texture2 = THREE.ImageUtils.loadTexture('https://anap73.github.io/Responsive-Portfolio.github.io/assets/images/AntMeHead.png');
			//texture.needsUpdate = true;


			//texture.anisotropy = renderer.getMaxAnisotropy();
			//var texture2 =texture;
			
			var cubeMaterial = new THREE.MeshFaceMaterial([
        new THREE.MeshBasicMaterial({
						map: texture //four rot right
        }),
        new THREE.MeshBasicMaterial({
					map: texture //two rot right
        }),
        new THREE.MeshBasicMaterial({
					map: texture //top
        }),
        new THREE.MeshBasicMaterial({
					map: texture //bottom
        }),
        new THREE.MeshBasicMaterial({
					map: texture  //front rot right
        }),
        new THREE.MeshBasicMaterial({
					map: texture //three rot right
        })
    ]);

			var cubeMaterial2 = new THREE.MeshFaceMaterial([
        new THREE.MeshBasicMaterial({
						map: texture2 //four rot right
        }),
        new THREE.MeshBasicMaterial({
					map: texture2 //two rot right
        }),
        new THREE.MeshBasicMaterial({
					map: texture2 //top
        }),
        new THREE.MeshBasicMaterial({
					map: texture2 //bottom
        }),
        new THREE.MeshBasicMaterial({
					map: texture2  //front rot right
        }),
        new THREE.MeshBasicMaterial({
					map: texture2 //three rot right
        })
		]);
		
			var cube = new THREE.Mesh( geometry, cubeMaterial );
			cube.rotation.y =0;				
			cube.rotation.x =0;
			cube.position.x = 2;
			cube.antName="You clicked a Goat";
			
			var cube2 = new THREE.Mesh( geometry2, cubeMaterial2 );
			cube2.position.x = -2;
			cube2.rotation.y =0;				
			cube2.rotation.x =.5
			cube2.antName="You clicked an Anthony";
			//cube2.rotation.z =0;
			//cube.rotation.z =.2;
						
			//scene.add( cube );
			//scene.rotateOnAxis(0,0);
			camera.position.z = 5;
				
			
			scene.add( cube );
			//scene.rotateOnAxis(0,.00001);
			scene.add( cube2 );
			

			
			//camera.rotation.order = "YXZ"
			var animateRight = function () {				
				requestAnimationFrame( animateRight );
				let graObj = antDetectObjectsUnderMouse();
				cube2.rotation.y -=.01;				
				cube2.rotation.x =.7;	
												
				cube.rotation.y +=.01;				
				cube.rotation.x =.7;
				renderer.render(scene, camera);
			};
			var animateLeft = function () {	
				requestAnimationFrame( animateLeft );
				
				let graObj = antDetectObjectsUnderMouse();
				cube2.rotation.y +=.01;				
				cube2.rotation.x =.7;

				cube.rotation.y -= .01;								
				cube.rotation.x =.7;
				renderer.render(scene, camera);
			};
			var antDetectObjectsUnderMouse = function(){
				//document.ant3dMouse 
				//camera
				//scene				
				let col = [];
				if(!bFireDetectObjectsUnderMouse){
			
					return col;
				};
				bFireDetectObjectsUnderMouse = false;
				//Detect Objects Under Mouse
				ray = new THREE.Raycaster();
				ray.setFromCamera( document.ant3dMouse, camera );
				// calculate objects intersecting the picking ray
				col = ray.intersectObjects(scene.children);
					
				if(col.length > 0){window.alert(col[0].object.antName);}
								
				return col;

			};
			animateRight();
			 
			$('.mycanvas').on('click',function(event){				
					

				document.ant3dMouse = new THREE.Vector2();
				document.ant3dMouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				document.ant3dMouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
				bFireDetectObjectsUnderMouse = true;
				if(event.clientX>(mywidth/2)){
					animateRight();
					}else{
					animateLeft();
					}

				document.antDegrees = cube.rotation.y%.360;
				console.log('antDegrees ' + document.antDegrees);
				//cube.rotation.y =.01;
				/*switch(true)
				{
 					case Math.abs(cube.rotation.y) > 0 && Math.abs(cube.rotation.y) <= 150:
						break;
					case Math.abs(cube.rotation.y) > 150 && Math.abs(cube.rotation.y) <= 450:
						break;
					case Math.abs(cube.rotation.y) > 450 && Math.abs(cube.rotation.y) <= 750:
						break;
					case Math.abs(cube.rotation.y) > 750 && Math.abs(cube.rotation.y) < 1200:
						break;
					default:
						cube.rotation.y=0;
						break;
				}*/
				
				
			
			

				event.preventDefault();
			});			
			$(document).ready(function(){{
				
			}});
