'use strict';

const e = React.createElement;

class MainBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button', {
                onClick: () => this.setState({
                    liked: true
                })
            },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#main_body_container');
ReactDOM.render(e(MainBody), domContainer);