/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class SoundService {
  private correctSound: HTMLAudioElement;
  private wrongSound: HTMLAudioElement;
  private completeSound: HTMLAudioElement;
  private clickSound: HTMLAudioElement;
  private flipSound: HTMLAudioElement;

  constructor() {
    this.correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
    this.wrongSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3');
    this.completeSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');
    this.clickSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    this.flipSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');

    // Set volumes
    this.correctSound.volume = 0.5;
    this.wrongSound.volume = 0.4;
    this.completeSound.volume = 0.6;
    this.clickSound.volume = 0.3;
    this.flipSound.volume = 0.3;

    // Preload
    [this.correctSound, this.wrongSound, this.completeSound, this.clickSound, this.flipSound].forEach(s => s.load());
  }

  playCorrect() { this.playSound(this.correctSound); }
  playWrong() { this.playSound(this.wrongSound); }
  playComplete() { this.playSound(this.completeSound); }
  playClick() { this.playSound(this.clickSound); }
  playFlip() { this.playSound(this.flipSound); }

  private playSound(audio: HTMLAudioElement) {
    const clone = audio.cloneNode() as HTMLAudioElement;
    clone.volume = audio.volume;
    clone.play().catch(() => {
      // Ignore errors (often from browser auto-play policies)
    });
  }
}

export const soundService = new SoundService();
