//beginning code\\
//let greenCharacter = document.createElement('img')\\
//greenCharacter.src = 'assets/green-character.gif'\\
//greenCharacter.style.position = 'fixed'\\
//greenCharacter.style.left = '100px'\\
//greenCharacter.style.bottom = '100px'\\
//document.body.append(greenCharacter)\\

//let pineTree = document.createElement('img')\\
//pineTree.src = 'assets/pine-tree.png'\\
//pineTree.style.position = 'fixed'\\
//pineTree.style.left = '450px'\\
//pineTree.style.bottom = '200px'\\
//document.body.append(pineTree)\\
// Function part

function newImage(src, left, bottom) {
  let object = document.createElement("img");
  object.src = src;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}
//IMAGES/ITEMS
newImage("assets/green-character/south.gif", 120, 110); //add south/west/north/east gif\\
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);
newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185); //shield = sheild\\
newItem("assets/staff.png", 600, 100);

function newItem(src, left, bottom); {
  let object = newImage(src, left, bottom);

  object.addEventListener("dblclick", function (){
    object.remove();
  });
}
