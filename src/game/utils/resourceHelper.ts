import { Game } from '@/core/Game';
import { tank } from '../bootstrap/loader';
export const getTexture = (name: string) => Game.getInstance().loaders.resources[name].textures;
