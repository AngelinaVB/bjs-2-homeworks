class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state = this.state * 1.5;
  };

  get state() {
    return this._state;
  };

  set state(value) {
    if (value < 0) {
      return this.state = 0;
    }
    else if (value > 100) {
      return this.state = 100
    }
    else {
      this._state = value;
    }
  };
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);


const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);
console.log(picknick.type);

const printItem = new Book('А. Сапковский', 'Меч Предназначения', 1992, 384);

console.log(printItem.author);
console.log(printItem.name);
console.log(printItem.releaseDate);
console.log(printItem.pagesCount);
console.log(printItem.state);
console.log(printItem.type);



class Library {
  constructor(name = ' ', books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    this.book = book;
    if (this.book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    this.type = type;
    this.value = value;

    let result = this.books.find((book) => book[type] === value);

    if (result === undefined) {
      return null;
    } else {
      return result;
    }
  }

  giveBookByName(bookName) {
    this.bookName = bookName;

    const resultGive = this.findBookBy('name', bookName);

    if (resultGive) {
      this.books.splice(this.books.indexOf(resultGive, 1));
      return resultGive;
    }
    else { return null };
  }

}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new PrintEditionItem('Типовой школьный журнал', 2019, 102));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);
console.log(library.findBookBy("releaseDate", 2019).name);
console.log(library.findBookBy("releaseDate", 2154));


console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
library.giveBookByName('Типовой школьный журнал');
library.giveBookByName('');
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138, 10));
console.log("Количество книг после выдачи: " + library.books.length);




class Student {
  constructor(name, marks = {}) {
    this.name = name;
    this.marks = marks;
  };

  addMark(mark, subject) {
    this.mark = mark;
    this.subject = subject;

    if (mark < 2 && mark > 5) {
      return 0;
    }
    else {
  /* return this.mark.push(mark, subject) */
}
}

getAverageBySubject(subject) {
  let sum = 0;
  if (this.subject == false) {
    return 0;
  } else {
    sum = this.mark.reduce((sum, item) => sum + item, 0);
    return parseFloat((sum / this.mark.length).toFixed(2));
  }
};

getAverage() {

};
}

const student = new Student("Олег Никифоров");


student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");

console.log(student);
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
/* student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75
 */




