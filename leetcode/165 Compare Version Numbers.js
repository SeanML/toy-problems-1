// Description
  // Compare two version numbers version1 and version2.
  // If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

  // You may assume that the version strings are non-empty and contain only digits and the . character.
  // The . character does not represent a decimal point and is used to separate number sequences.
  // For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

  // Here is an example of version numbers ordering:

  // 0.1 < 1.1 < 1.2 < 13.37

  /**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
    let split1 = version1.split('.').map(e => Number(e));
    let split2 = version2.split('.').map(e => Number(e));
    for(let i = 0; i < Math.max(split1.length, split2.length); i++) {
        if(!split1[i]) split1[i] = 0;
        if(!split2[i]) split2[i] = 0;
        if(split1[i] > split2[i]) {
            return 1;
        } else if(split1[i] < split2[i]) {
            return -1;
        }
    }
    return 0;
};