// JSXはリアクトのコンポーネントであることを明示する拡張子
import React, { useEffect, useState } from "react";

import ColorfulMessage from "./components/colorfulText";

const App = () => {
  // 再レンダリング範囲を考える
  // stateを変更したときApp以下で全要素が再レンダリングされていることになる
  // コスト高いよ～～～

  console.log("Update");

  // [変数名, 更新する関数] = useState(初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    // stateを更新する処理
    // setNum(更新したい値)
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // Too many re-renders.
  //
  // if (num % 3 === 0) {
  // ここでステートが更新されることによって、もう一度レンダリングすることになる
  // つまり無限に再レンダリングされることになるエラー
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  // 以下のように書けば Too many re-renders解消されるが、、、
  // 表示非表示ボタンを押したときに顔が変更できなくなる、、
  // より正確に言えば、上記で更新したにもかかわらず、もう一度したでTrueにされてしまう。
  // useEffectを使うことで解消される
  // if (num % 3 === 0) {
  //   // falseのときは変更しない
  //   faceShowFlag || setFaceShowFlag(true);
  // } else {
  //   // trueのときは変更しない
  //   faceShowFlag && setFaceShowFlag(false);
  // }

  // list内の変数を監視する
  // 処理の関心を分離
  // useEffect(func, [list])
  // flutter における initstateのようなもの
  // useEffect(() => {
  //   console.log("USEEFECT!!");
  // }, []);

  useEffect(() => {
    if (num % 3 === 0) {
      // falseのときは変更しない
      faceShowFlag || setFaceShowFlag(true);
    } else {
      // trueのときは変更しない
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslintのエラーは無視
    // faceshowflagを書けというエラーだが、今回は逆にfaceshowflagに関心がない
    // 下の文章でeslintを無効かしてエラーを無視することができる。
    // eslint-disable-next-line
  }, [num]);

  return (
    <>
      {/* Javascriptのオブジェクト */}
      {/* Cssを適応してもよいし、CSSをJS内で書けるようにするパッケージもある */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* <components propsName = value > */}
      <ColorfulMessage color="blue" message="お元気ですか?">
        げんき～～
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です！" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>表示非表示</button>
      <p>{num}</p>
      {/* 演算子＆＆の本当の意味！！ */}
      {faceShowFlag && <p>( ｀ー´)ノ</p>}
    </>
  );
};

// 他ファイルで使うことを明治

export default App;
