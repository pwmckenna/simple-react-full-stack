import Fluxible from 'fluxible';
import fetchr from './fetchr';

const fluxible = new Fluxible();

fluxible.plug(fetchr);

export default fluxible;
