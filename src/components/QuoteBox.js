import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import QuoteButton from './QuoteButton';

class QuoteBox extends Component {
    constructor(props) {
        super(props);

        // variables text y autor vacios por defecto
        this.state = {
            text: '',
            author: '',
            color: ''
        }

        // enlazar funcion
        this.randomQuote = this.randomQuote.bind(this);

        // lista de frases
        this.quotes = [
            { text: 'El único modo de hacer un gran trabajo es amar lo que haces',
             author: 'Steve Jobs'},
            { text: 'Nunca pienso en las consecuencias de fallar un gran tiro… cuando se piensa en las consecuencias se está pensando en un resultado negativo',
             author: 'Michael Jordan'},
            { text: 'El dinero no es la clave del éxito; la libertad para poder crear lo es',
             author: 'Nelson Mandela'},
            { text: 'Cuanto más duramente trabajo, más suerte tengo',
             author: 'Gary Player'},
            { text: 'La inteligencia consiste no sólo en el conocimiento, sino también en la destreza de aplicar los conocimientos en la práctica',
             author: 'Aristóteles'},
            { text: 'El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu',
             author: 'Helena Rubinstein '},
            { text: 'Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan',
             author: 'Elon Musk'},
            { text: 'Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida',
             author: 'Confucio'},
            { text: 'Un sueño no se hace realidad por arte de magia, necesita sudor, determinación y trabajo duro',
             author: 'Colin Powell'},
            { text: 'Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé',
             author: 'Benjamin Franklin '},
            { text: 'La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar',
             author: 'Albert Einstein'},
            { text: 'A veces la adversidad es lo que necesitas encarar para ser exitoso',
             author: 'Zig Ziglar '},
            { text: 'Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso',
             author: 'Bill Cosby'},
            { text: 'Ejecuta tus conocimientos con la maestría del que sigue aprendiendo',
             author: 'Jonathan García-Allen'}
        ];

        // background list
        this.colors = ['red', 'blue', '#9c27b0', 'orange', 'green'];
    }

    // funcion para cargar aleatoriamente frase
    randomQuote() {
        let quotesCount = this.quotes.length - 1;
        let randomIndex = Math.floor(Math.random() * quotesCount);

        let colorCount = this.colors.length - 1;
        let indexColor = Math.floor(Math.random() * colorCount);

        this.setState({
            text: this.quotes[randomIndex].text,
            author: this.quotes[randomIndex].author,
            color: this.colors[indexColor]
        })
    }

    // luego de cargar el dom
    componentDidMount() {
        this.randomQuote();
    }

    render() {
        return (
            <div className='bg' style={{ backgroundColor: this.state.color}}>
                <div id="quote-box" className='quote-box position-absolute top-50 start-50 translate-middle'>
                    <QuoteText text={this.state.text} color={this.state.color} />
                    <QuoteAuthor author={this.state.author} color={this.state.color} />
                    <div className='row'>
                        <div className='col-md-6'>
                            <a id="tweet-quote" className='btn btn-text' style={{ backgroundColor: this.state.color}} href="https://twitter.com/intent/tweet"><i class="fab fa-twitter"></i></a>
                        </div>
                        <div className='col-md-6 text-end'>
                            <QuoteButton onclick={this.randomQuote} color={this.state.color} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Valor por defecto
QuoteBox.defaultProps = {
    quoteText: 'Hola mundo aqui mi quote',
    quoteAuthor: 'Doko'
};

export default QuoteBox;