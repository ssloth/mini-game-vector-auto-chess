import * as config from '../../../env.json';

export interface GameConfiguration {
  level?: number;
  speed?: number;
  nbCellsX?: number;
  nbCellsY?: number;
  width?: number;
  height?: number;
  cellWidth?: number;
  cellHeight?: number;
  color?: string;
}

export default {
  sence: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
};

export const SERVER = config.server;

export const BOARD = {
  SIZE: 60,
  GARD_COUNT: 8,
  INLINE_GARD_COUNT: 3,
};
