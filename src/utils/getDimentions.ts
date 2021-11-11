import { BodyFactory } from "matter";


const getBoxHeight=(box:{ height: number; width: number } | { y: number; x: number })=>{
  if('height' in box) return box.height
  else if('y' in box) return box.y 
}


const getBoxWidth=(box:{ height: number; width: number } | { y: number; x: number })=>{
  if('width' in box) return box.width
  else if('x' in box) return box.x 
}


/**
 *
 * @param box object with either height, width or y, x for those measures
 * @param {number} percentageShown 0.0 to 1.0, percentage of box to cover with the box 
 */
export const getBoxDimensionsFromObject = (
  box: { height: number; width: number } | { y: number; x: number },
  percentageShown = 1
):[number, number, number,number] => {

  const height = getBoxHeight(box)
  const width = getBoxWidth(box)

  const lowerHeight = Math.floor(height - percentageShown * height),
    lowerWidth = Math.floor(width - percentageShown * width);
  return [lowerWidth, lowerHeight, width * percentageShown,  height * percentageShown];
};


