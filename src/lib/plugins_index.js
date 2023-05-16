/* eslint-disable import/prefer-default-export */
import Cytoscape from './components/Cytoscape.react';
import CytoscapeJS from 'cytoscape';
import svg from 'cytoscape-svg';
import edgehandles from 'cytoscape-edgehandles';

CytoscapeJS.use(svg);
CytoscapeJS.use(edgehandles);

export {
    Cytoscape
};