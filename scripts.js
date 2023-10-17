let currentLevel = null;
let questionIndex = 0;

const levels = {
    'ice-breakers': [
        "What's your favorite color?",
        "Do you prefer coffee or tea?",
        "If you could visit any country in the world, where would you go?",
        "What's your favorite book or movie and why?",
        "Do you have any hobbies or special talents?",
        "If you could meet any historical figure, who would it be and why?",
        "What's the most adventurous thing you've ever done?",
        "Coffee or tea?",
        "If you could have any superpower, what would it be?",
        "What's your favorite season and why?",
        "Describe yourself using only three words.",
        "If you could be any animal, which one would you choose?",
        "What's your favorite type of music?",
        "Have you ever traveled alone? If so, where did you go?",
        "What's something that's on your bucket list?",
        "Who in your life has influenced you the most?",
        "If you could instantly master any skill, what would it be?",
        "What's your go-to karaoke song?",
        "What was your first job?",
        "What's your favorite way to relax after a long day?",
        "Beach or mountains?",
        "If you could eat only one food for the rest of your life, what would it be?",
        "What's the last show you binge-watched?",
        "Do you have any pets? Tell me about them.",
        "What's the best piece of advice you've ever received?",
        "What's your favorite holiday and why?",
        "Are you a morning person or a night owl?",
        "What's a talent or skill you wish you had?",
        "What's your favorite dessert?",
        "If you could live in any time period, when would it be?",
        "Who's your favorite fictional character and why?",
        "Have you ever had a supernatural experience?",
        "What's the first thing you'd do if you won the lottery?",
        "What sport or activity do you wish you were better at?",
        "Who would play you in a movie about your life?",
        "What's the most memorable gift you've ever received?",
        "If you could spend a day with anyone, living or dead, who would it be?",
        "Do you believe in extraterrestrial life?",
        "What's your favorite board game or card game?",
        "What was the last concert or event you attended?",
        "How do you handle stress?",
        "What's the strangest food you've ever eaten?",
        "If you could teleport anywhere in the world right now, where would you go?",
        "What was the last book you read?",
        "What's your dream job?",
        "Are you a planner or spontaneous?",
        "Have you ever met anyone famous?",
        "If you could time travel, would you go to the past or the future?",
        "What's the last thing that made you laugh out loud?",
        "Tell me about a place you've been that took your breath away.",
        //... add more questions here
    ],
    'heart-talks': [
        "Who are your best friends?",
        "What's your most cherished memory?",
        "What's a life lesson you learned the hard way?",
        "Have you ever had a life-changing experience?",
        "What's something you've never told anyone because you were too afraid of what they'd think?",
        "Describe a moment when you felt truly alive.",
        "What qualities do you value most in a friend?",
        "What does love mean to you?",
        "Do you believe in destiny or free will?",
        "What's a dream you've had that you can't shake off?",
        "How do you handle regret?",
        "What's the most challenging thing about relationships for you?",
        "Describe a time you were deeply moved.",
        "How do you handle personal failures?",
        "What are your thoughts on forgiveness?",
        "What's something you wish more people knew about you?",
        "How do you find purpose in life?",
        "When was the last time you cried and why?",
        "How do you handle conflicts in your relationships?",
        "What's a passion you have that not many people know about?",
        "What's the best advice you've ever been given?",
        "Are there things you're holding onto that you need to let go of?",
        "How do you cope with feelings of loneliness?",
        "What's your philosophy on life in one sentence?",
        "How do you handle disappointment?",
        "What makes a relationship truly special for you?",
        "Have you ever experienced heartbreak? How did you cope?",
        "What's a personal challenge you're currently facing?",
        "How do you define success in life?",
        "Is there anything you're too hard on yourself about?",
        "How do you approach trust in relationships?",
        "What's something you want to achieve in the next 5 years?",
        "Do you believe people can change?",
        "How do you handle rejection?",
        "What role does spirituality or religion play in your life?",
        "How do you handle moments of doubt?",
        "What's something you're truly grateful for?",
        "What are your views on vulnerability?",
        "How do you express love?",
        "What's a memory that always makes you smile?",
        "Is there a moment in life you wish you could relive?",
        "How do you find balance in your life?",
        "What's something that's challenging, but you continue doing it because you love it?",
        "What are your views on friendship vs. romantic love?",
        "How do you handle change?",
        "Do you have any unresolved issues with someone?",
        "What's an experience that helped shape the person you are today?",
        "How do you handle stress in the long term?",
        "What's a risk you took that paid off?",
        "What does it mean for you to be truly happy?",
        //... add more questions here
    ],
    'soul-dive': [
        "What makes you get up in the morning?",
        "What's your life's biggest purpose?",
        "What's a belief you hold with which many people disagree?",
        "Have you ever had an experience that you would describe as mystical or transcendent?",
        "If you could glimpse one moment from your future, what would it be?",
        "Do you believe in an afterlife? What do you think it's like?",
        "What's the most profound realization you've had about yourself?",
        "How do you define the soul?",
        "What's one thing you would tell your younger self about life if you had the chance?",
        "How do you think our consciousness is connected to the universe?",
        "Do you feel there's a greater purpose or meaning to life, beyond our daily routines?",
        "What's been your biggest internal struggle?",
        "Have you ever felt a deep connection with someone you just met?",
        "What legacy do you want to leave behind?",
        "How do you deal with the concept of mortality?",
        "What does it mean to live authentically?",
        "What's a question you've pondered for a long time without an answer?",
        "Do you believe in fate or that we create our destiny?",
        "What's something you believe is true, even though you can't prove it?",
        "How do you deal with existential crises?",
        "Do you believe we are alone in the universe?",
        "What's the nature of true wisdom?",
        "How do you make sense of suffering in the world?",
        "How does one find inner peace in the chaos of life?",
        "Do you think dreams hold symbolic or predictive meaning?",
        "What role does intuition play in your life?",
        "How do you reconcile moments when your heart and mind conflict?",
        "How would you describe the journey of self-discovery?",
        "What's the most soulful connection you've had with another being?",
        "How do you approach the unknown or the unknowable?",
        "How do you find solace during life's darkest times?",
        "Do you believe there's a difference between living and merely existing?",
        "How would you define enlightenment?",
        "What's the biggest question you have about the universe?",
        "How do you make peace with missed opportunities or paths not taken?",
        "How do you think the world was created?",
        "What do you think is the essence of being human?",
        "How do you define truth?",
        "Is there such a thing as a soulmate, and have you met yours?",
        "What are your thoughts on reincarnation?",
        "How do you come to terms with regrets or mistakes?",
        "What does it mean to truly understand someone?",
        "How do you grapple with concepts that are beyond human comprehension?",
        "Do you believe in miracles? Have you witnessed one?",
        "What does freedom mean to you at a soul level?",
        "Have you ever experienced a moment of serendipity that felt like more than just coincidence?",
        "What role does love play in the universe?",
        "How do you face your own shadows or inner demons?",
        "What is a spiritual experience you'll never forget?",
        "How do you reconcile the good and evil in the world?",
        //... add more questions here
    ]
};

// Utility function to shuffle the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
}

function showLevels() {
    document.body.setAttribute("data-screen", "levels");
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('levels').style.display = 'block';
}

function showQuestions(level) {
    // Reset screens
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('levels').style.display = 'none';
    document.getElementById('ice-breakers-screen').style.display = 'none';
    document.getElementById('heart-talks-screen').style.display = 'none';
    document.getElementById('soul-dive-screen').style.display = 'none';

    // Display the selected level screen
    document.getElementById(`${level}-screen`).style.display = 'block';

    currentLevel = level;
    shuffleArray(levels[currentLevel]);
    questionIndex = 0;

    displayQuestion();
}

function getRandomQuestion() {
    const questions = levels[currentLevel];
    return questions[Math.floor(Math.random() * questions.length)];
}

function displayQuestion() {
    const question = getRandomQuestion();
    document.getElementById(`${currentLevel}-question`).innerText = question;
}

document.querySelectorAll('.question-card').forEach(card => {
    card.addEventListener('click', function() {
        questionIndex++;
        displayQuestion();
    });
});
