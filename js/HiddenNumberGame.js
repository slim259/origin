class HiddenNumberGame {
    constructor() {
        this.difficultySettings = {
            facile: { attempts: 10, min: 1, max: 50 },
            intermédiaire: { attempts: 7, min: 1, max: 100 },
            difficile: { attempts: 5, min: 1, max: 200 }
        };
        this.resetGame();
    }

    resetGame() {
        this.targetNumber = 0;
        this.remainingAttempts = 0;
        this.gameOver = false;
    }

    startGame() {
        this.resetGame();
        this.selectDifficulty();
        
        if (!this.gameOver) {
            this.generateTargetNumber();
            this.playGame();
        }
    }

    selectDifficulty() {
        const difficulty = prompt(
            "Choisissez votre niveau de difficulté:\n" +
            "- Facile (1-50, 10 tentatives)\n" +
            "- Intermédiaire (1-100, 7 tentatives)\n" +
            "- Difficile (1-200, 5 tentatives)\n\n" +
            "Entrez 'facile', 'intermédiaire' ou 'difficile'"
        )?.toLowerCase();

        if (this.difficultySettings[difficulty]) {
            const { attempts, min, max } = this.difficultySettings[difficulty];
            this.remainingAttempts = attempts;
            this.min = min;
            this.max = max;
        } else {
            alert("Niveau non reconnu. Le jeu va se fermer.");
            this.gameOver = true;
        }
    }

    generateTargetNumber() {
        this.targetNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    playGame() {
        while (this.remainingAttempts > 0 && !this.gameOver) {
            const guess = parseInt(
                prompt(`Devinez le nombre (entre ${this.min} et ${this.max}).\n` +
                       `Il vous reste ${this.remainingAttempts} tentatives.`)
            );

            if (isNaN(guess)) {
                alert("Veuillez entrer un nombre valide!");
                continue;
            }

            this.remainingAttempts--;

            if (guess === this.targetNumber) {
                alert(`Félicitations! Vous avez trouvé le nombre ${this.targetNumber}!`);
                this.askForReplay();
                return;
            } else if (guess < this.targetNumber) {
                alert(`Trop petit! Il vous reste ${this.remainingAttempts} tentatives.`);
            } else {
                alert(`Trop grand! Il vous reste ${this.remainingAttempts} tentatives.`);
            }
        }

        if (!this.gameOver) {
            alert(`Désolé, vous avez épuisé toutes vos tentatives. Le nombre était ${this.targetNumber}.`);
            this.askForReplay();
        }
    }

    askForReplay() {
        const replay = confirm("Voulez-vous rejouer?");
        if (replay) {
            this.startGame();
        } else {
            alert("Merci d'avoir joué!");
            this.gameOver = true;
        }
    }
}

// Démarrer le jeu
const game = new HiddenNumberGame();
game.startGame();