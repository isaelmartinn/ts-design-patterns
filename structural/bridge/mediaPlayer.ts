export interface MediaPlayerImplementation {
  playAudion(): void;
  playVideo(): void;
}

export class WindowMediaPlayer implements MediaPlayerImplementation {
  playAudion(): void {
    console.log("Playing audio on windows media player");
  }

  playVideo(): void {
    console.log("Playing video on windows media player");
  }
}

export class MacOsMediaPlayer implements MediaPlayerImplementation {
  playAudion(): void {
    console.log("Playing audio on macOS media player");
  }

  playVideo(): void {
    console.log("Playing video on macOS media player");
  }
}

export abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

export class AudioPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.playAudion();
  }
}

export class VideoPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.playVideo();
  }
}

/// Client Code
const windowAudioPlayer = new AudioPlayer(new WindowMediaPlayer());
windowAudioPlayer.playFile();

const macOsVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
macOsVideoPlayer.playFile();
