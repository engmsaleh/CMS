exports = module.exports = {
  shortcode: function(length) {
    var vowels = 'aeiou',
      consonants = 'bcdfghjklmnpqrstvwxyz',
      word = '',
      index = 0,
      set;

    if (length === undefined) {
      length = 3;
    }

    for (; index < length; index += 1) {
      set = (index % 2 === 0) ? consonants : vowels;
      word += set [Math.floor(Math.random() * set.length)];
    }

    return word;
  },
}