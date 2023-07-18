const randomiser = num => {
    return Math.floor(Math.random() * num)
};

const mood = {
    weather : ['sunny', 'cold', 'rainy', 'windy'],
    feeling: ['good', 'estatic', 'bad', 'awesome', 'mischievous']
};

let personalMood = [];

for (const item in mood) {
    // console.log(`${item}: ${mood[item]}`);
    let moodIndex = randomiser(mood[item].length)
    // console.log(moodIndex); //produces a random number for each array in mood object
    switch(item) {
        case 'weather':
            personalMood.push(`It's a ${mood[item][moodIndex]} day.`)
            break;
        case 'feeling':
            personalMood.push(`You are feeling ${mood[item][moodIndex]}.`);
            break;
        default:
            personalMood.push('Not enough info.')
    }
  }

  const formatMood = mood => {
    const formatted = personalMood.join('\n')
    console.log(formatted);
  }

//   console.log(personalMood);
formatMood(personalMood);