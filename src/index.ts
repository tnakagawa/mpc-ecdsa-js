import * as _ from 'lodash';

import { split, reconstruct } from './lib/shamir_secret_sharing';

function component(): HTMLElement {
  const element = document.createElement('div');

  element.innerHTML = _.join(
    ['Hello', 'MPC', 'ECDSA', reconstruct(split(1, 3, 2), 3, 2)], ' ', );

  return element;
}

document.body.appendChild(component());
