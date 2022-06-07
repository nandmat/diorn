import React from 'react';
import{View, 
    Image, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGitHub = '#010409';
const ImageProfileGitHub = 
'https://avatars.githubusercontent.com/u/87582433?v=4';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const urlToMyGitHub = 'https://github.com/nandmat';

const App = ()=>{
    const handlePressGoToGithub = async ()=>{
        console.log('verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if(res){
            console.log('link aprovado');
            console.log('abrindo link.....');
            await Linking.openURL(urlToMyGitHub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGitHub} barStyle="light-content"/>
            <View style={style.content}>
               <Image accessibilityLabel='Nand' 
               style={style.avatar} 
               source={{uri: ImageProfileGitHub}}
               />
               <Text accessibilityLabel='nome Nanderson Matheus'
               style={[style.defaultText, style.name]}>
                   Nanderson Matheus
                   </Text>
               <Text accessibilityLabel='nickname nandmat'
                style={[style.defaultText, style.nickname]}>
                    nandmat
                    </Text>
               <Text accessibilityLabel='descricao'
                style={[style.defaultText, style.description]}>
               Full Stack e formação pela StackX Estudante de Análise e 
               Desenvolvimento de Sistemas
               </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                     <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGitHub,
        flex: 1, //Expandir para tela inteira
        justifyContent: 'center',
        alignItems: 'center',
       // flexDirection: 'row',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGitHub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGitHub,
    },
    description:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGitHub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontSize: 14,
        fontWeight: 'bold',
    },
})