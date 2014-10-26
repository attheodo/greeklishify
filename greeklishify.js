module.exports = {
        convert: function(stringInGreek){

            var map_table = {
                //from https://gist.github.com/nikosd/24986#file-greeklish-rb
                'ά' : 'a', 'α' : 'a', 'Α' : 'A', 'Ά' : 'A',
                'β' : 'v', 'Β' : 'V',
                'γ' : 'g', 'Γ' : 'G',
                'δ' : 'd', 'Δ' : 'D',
                'έ' : 'e', 'ε' : 'e', 'Ε' : 'E', 'Έ' : 'E',
                'ζ' : 'z', 'Ζ' : 'Z',
                'ή' : 'h', 'η' : 'h', 'Η' : 'H', 'Ή' : 'H',
                'θ' : 'th', 'Θ' : 'Th',
                'ί' : 'i', 'ϊ' : 'i', 'ΐ' : 'i', 'ι' : 'i', 'Ι' : 'I', 'Ί' : 'I',
                'κ' : 'k', 'Κ' : 'K',
                'λ' : 'l', 'Λ' : 'L',
                'μ' : 'm', 'Μ' : 'M',
                'ν' : 'n', 'Ν' : 'N',
                'ξ' : 'x', 'Ξ' : 'X',
                'ό' : 'o', 'ο' : 'o', 'Ό' : 'O','Ο' : 'O',
                'π' : 'p', 'Π' : 'P',
                'ρ' : 'r', 'Ρ' : 'R',
                'σ' : 's', 'Σ' : 'S', 'ς' : 's',
                'τ' : 't', 'Τ' : 'T',
                'ύ' : 'y', 'υ' : 'y', 'Ύ' : 'Y','Υ' : 'Y',
                'φ' : 'f', 'Φ' : 'F',
                'χ' : 'x', 'Χ' : 'X',
                'ψ' : 'ps', 'Ψ' : 'Ps',
                'ώ' : 'w', 'ω' : 'w', 'Ώ' : 'W','Ω' : 'W'
            }

            var convertedString = '';

            for(var i=0; i < stringInGreek.length; i++){
                convertedString += map_table[stringInGreek.charAt(i)] ? map_table[stringInGreek.charAt(i)] : stringInGreek.charAt(i);
            }

            return convertedString;
        }
};
