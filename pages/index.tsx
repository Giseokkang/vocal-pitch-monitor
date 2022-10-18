import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import AudioAnalyser from "./AudioAnalyser";

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .home-button {
  }
`;

const Home: NextPage = () => {
  const ref = useRef<HTMLAudioElement>(null);
  const [audio, setAudio] = useState<MediaStream | null>(null);

  const stopMicrophone = () => {
    if (!audio) return;
    audio.getTracks().forEach((track) => track.stop());
    setAudio(null);
  };

  const getMicrophone = async () => {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    setAudio(audio);
  };

  const toggleMicrophone = () => {
    if (audio) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  };

  // // 클릭 이벤트 처리
  // const onClick = async () => {
  //   // 1. AudioContext 생성
  //   const audioContext = new (window.AudioContext || window.BaseAudioContext)();

  //   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  //   setAudio(stream);

  //   // 2. 오디오 소스(OscillatorNode) 생성: 특정 주파수의 음을 재생하는 소스 노드
  //   const MediaStreamAudioSourceNode =
  //     audioContext.createMediaStreamSource(stream);

  //   // 3. 볼륨 설정을 위한 오디오 노드(GainNode) 생성
  //   const gainNode = audioContext.createGain();
  //   gainNode.gain.value = 0.5; // 볼륨 설정 (0~1)
  //   const analyser = audioContext.createAnalyser();

  //   analyser.fftSize = Math.pow(2, 15);

  //   // 4. 오디오 그래프 연결
  //   MediaStreamAudioSourceNode.connect(gainNode).connect(
  //     audioContext.destination
  //   );
  //   MediaStreamAudioSourceNode.connect(analyser);

  //   // analyser.connect(audioContext.destination);

  //   const dataArray = new Uint8Array(analyser.frequencyBinCount);

  //   analyser.getByteFrequencyData(dataArray);

  //   ref.current?.appendChild(analyser as any);

  //   // AudioContext 가동
  //   audioContext.resume();
  // };
  return (
    <HomeContainer className={styles.container}>
      <audio className="auto" ref={ref}></audio>
      <button onClick={toggleMicrophone}>
        {audio ? "Stop microphone" : "Get microphone input"}
      </button>
      {audio ? <AudioAnalyser audio={audio} /> : ""}
    </HomeContainer>
  );
};

export default Home;
