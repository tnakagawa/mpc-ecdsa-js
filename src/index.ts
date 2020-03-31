import * as _ from 'lodash';

function component(): HTMLElement {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'MPC', 'ECDSA'], ' ');

  return element;
}

document.body.appendChild(component());
