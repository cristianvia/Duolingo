import React, { useState, useEffect } from 'react';
import { View, Alert } from "react-native";
import styles from './App.styles';

import ImageMultipleChoiceQuestion from './src/components/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import questions from "./assets/data/allQuestions";
import Header from './src/components/Header';

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex])

  const [lives, setLives ] = useState(5);

  //Cada vez que cambia el valor de currentQuestionIndex lo seteará en el estado
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }

  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  }

  const onWrong = () => {
    Alert.alert("Wrong!");
    if (lives <= 1){
      Alert.alert("Game over", "Try again", [
        {
          text: "Try again",
          onPress: restart,
        }
      ]);
    }else{
      setLives(lives - 1);
    }
    
  }

  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives}/>
      {/* It should be a ternary expression image ? <ImageMultiple> : null but we can simplify it by
      adding &&. If currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && is false whatever comes after will be false to
      true + false = false etc...
      */}
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />)}


      {currentQuestion.type === 'OPEN_ENDED' && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />)}
    </View>
  );
}

export default App;