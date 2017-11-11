import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import {CardSection} from "./CardSection";
import * as actions from '../actions';
import {connect} from 'react-redux';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {library, expended} = this.props;

        if (expended) {
            return (
                <CardSection>
                    <Text style={{ flex:1 }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectedLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text
                            style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expended = state.selectedLibraryId === ownProps.library.id;

    return {expended};
};

export default connect(mapStateToProps, actions)(ListItem);