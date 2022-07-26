# shake_shootscreen_rn

1. Cài thư viện:
yarn add react-native-shake
yarn add react-native-view-shot

2. Run lenh:
npm run cpfile

3. Su dung trong function component

  React.useEffect(() => {
    const subscription = RNShake.addListener(data => {
      //Sau khi shake se tra ve hinh anh chup
      console.log('uri', data);
     
    });
    return () => {
      subscription.remove();
    };
  }, []);

