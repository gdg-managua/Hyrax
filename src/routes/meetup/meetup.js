import {
    Card, CardMedia, CardTitleText,
    CardTitle
} from 'preact-mdl';
import { Component } from 'preact';

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedMeetup: null,
            meetups: [
                {
                    id: 0,
                    name: 'Android',
                    image: 'assets/images/android.png',
                    host: 'Oscar Cortez',
                    date: '9/9/2019',
                    location: 'Rain Agency',
                    description: 'Android native development for mobile phones'
                },
                {
                    id: 1,
                    name: 'Flutter',
                    image: 'assets/images/flutter.png',
                    host: 'Jonathan Guadamuz',
                    date: '19/9/2019',
                    location: 'La Fábrica',
                    description: 'Flutter crossplatform development for mobile'
                }
            ]
        }
    }

    onMeetupSelect(Meetup) {
        this.setState({ selectedMeetup: Meetup });
    }

    renderMeetup(meetup) {
        if (meetup != null)
            return (
                <Card>
                    <CardMedia top src={meetup.image} alt={meetup.name} />
                    <CardTitle>{meetup.name}</CardTitle>
                    <CardTitleText>{meetup.description}</CardTitleText>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const meetup = this.state.meetups.map((meetup) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={meetup.id}
                        onClick={() => this.onMeetupSelect(meetup)}>
                        <CardMedia width="100%" src={meetup.image} alt={meetup.name} />
                        <CardTitle>{meetup.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {meetup}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderMeetup(this.state.selectedMeetup)}
                    </div>
                </div>
            </div>
        );
    }
}