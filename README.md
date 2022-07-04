# P3-endless-scene-starter

*Using the noise and 2D tile creating to make autotiling for transition between tiles of different types*

The effect I was trying to achieve at first, is to create a water drop when the audience click the first time, and everytime the audience click around the water drop, the drops will connect together to become a water flow. However, the first difficulty I met was how to know if the player click anywhere(top bottom left or right) around the water drop. This was solved succesfully because the clicks can store the values. The most difficult thing is that I tried to do the logics like when the player click the box which has not water drops at its top, bottom, left and right, then a water drops will draw, but the thing is when I do that, I have to create the new tiles big enough to fit two or more boxes. What I finally did was to include enough many cases about anything may happen(For example, a box only has water drop at its bottom and left etc), and I change the idea of water flow to connection of flat water drops.
Credit: Adam Smith/Isaac Karth 
Edited by: Asiiah Song
