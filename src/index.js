import Translate from './Translate';
import Translation from './Translation';

import Plural from './constants/Plural';
import Gender from './constants/Gender';
import Mode from './constants/Mode';

import * as Adapters from './adapters';
import * as Caches from './caches';

import getInstance from './getInstance';

export { getInstance };

// export constants
export { Plural, Gender, Mode };

// export modules
export { Adapters, Caches };

// export classes
export { Translation };

// export main class
export { Translate };
export default Translate;
