import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import styles from './styles';
import mascot from '../../../assets/images/mascot.png';
import Button from "../Button";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {

    const [input, setInput ] = useState('');

    const onButtonPress = () => { 

        //trim() allow us to ignore empty spaces at the beginning and end of the sentence
        if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
            onCorrect();
        }else{
            onWrong();
        }

        setInput("");

    };

    return (
        <>

            <Text style={styles.title}>Translate this sentence</Text>
            <View style={styles.row}>

                <Image source={mascot} style={styles.mascot} resizeMode="contain" />

                <View style={styles.sentenceContainer}>
                    <Text style={styles.sentence}>{question.text}</Text>
                </View>
            </View>
            <TextInput 
            value={input}
            onChangeText={setInput}
            style={styles.textInput} 
            placeholder="Type in english"
            textAlignVertical="top"
            multiline
            />

            <Button text="Check" onPress={onButtonPress} disabled={!input} />
        </>
    )
};



export default OpenEndedQuestion;