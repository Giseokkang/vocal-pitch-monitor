import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AudioVisualiser from "./AudioVisualiser";

const AudioAnalyserBlock = styled.div``;

type AudioAnalyserProps = {
  audio: MediaStream;
};

const AudioAnalyser: React.FC<AudioAnalyserProps> = ({ audio }) => {
  const [audioData, setAudioData] = useState(new Uint8Array(0));

  useEffect(() => {
    const audioContext = new (window.AudioContext || window.BaseAudioContext)();
    const analyser = audioContext.createAnalyser();

    const source = audioContext.createMediaStreamSource(audio);
    source.connect(analyser);

    let rafId: any;

    const tick = () => {
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteTimeDomainData(dataArray);
      // analyser.getByteFrequencyData(dataArray);

      setAudioData(dataArray);
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, []);

  return <AudioVisualiser audioData={audioData} />;
};

export default AudioAnalyser;
