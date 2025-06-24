import { RemoteControl } from './RemoteControl';
import { Light } from './receivers/Light';
import { Stereo } from './receivers/Stereo';
import { LightOnCommand } from './commands/LightOnCommand';
import { StereoOnWithCDCommand } from './commands/StereoOnWithCDCommand';
import { NoCommand } from './commands/NoCommand';

const remote = new RemoteControl();

const livingRoomLight = new Light('Living Room');
const stereo = new Stereo('Living Room');

const lightOn = new LightOnCommand(livingRoomLight);
const lightOff = new NoCommand(); // You could implement LightOffCommand if needed

const stereoOn = new StereoOnWithCDCommand(stereo);
const stereoOff = new NoCommand(); // Same here

remote.setCommand(0, lightOn, lightOff);
remote.setCommand(1, stereoOn, stereoOff);

remote.pressOnButton(0);
remote.pressOffButton(0);
remote.pressUndoButton();

remote.pressOnButton(1);
remote.pressUndoButton();
