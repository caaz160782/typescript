"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 55) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const Hulk = new Avenger("Hulk", "original", "Bruce");
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} (${this.realName})`;
        }
    }
    Avenger.avgAge = 35;
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            this.name = name;
        }
    }
    const wolverine = new Xmen("wolverine", "Logan", true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("soy apocalipsis .... the one");
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Pepe man');
    console.log(apocalipsis);
})();
//# sourceMappingURL=main.js.map