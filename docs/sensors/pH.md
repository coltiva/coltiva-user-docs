---
sidebar_position: 1
custom_edit_url: null
---

import sensorPlatform from '@site/static/img/sensor-platform.jpg';
import styles from '@site/src/css/instruction.module.css';

# pH

## Mounting

The pH sensor can be mounted using the sensor platform.

<img src={sensorPlatform} alt="Sensor platform" className={styles.instructionSvg} />

## ESD protection of the BNC connector
The pH sensor connects to the device through a BNC connector. The input circuit behind the center pin of this connector is sensitive to electrostatic discharge (ESD) and may be permanently damaged by an ESD strike.

**Do not** touch the center pin of the BNC connector unless you have taken appropriate ESD precautions, such as wearing a properly grounded ESD wrist strap or first discharging yourself by touching a grounded metal surface.

## Cleaning
pH sensor cleaning must be done with care. Normally, rinsing it with a commercial pH probe storage/cleaning solution, or pH 4 buffer, is enough. If the electrode is not sufficiently cleaned this way, let it soak for an extended period of time in the cleaning solution.

**Avoid** touching the glass electrode of the sensor with any object. Soft objects like cloths and cotton swabs risk transferring static charges to the pH electrode, which will degrade its performance. Other parts of the sensor may be cleaned with a soft cloth. If you do touch the electrode, leave the sensor in storage/cleaning solution, or pH 4 buffer, for at least 24 hours before calibration to dissipate any static charges.

## Calibration
Calibrate at least every 3 months, and whenever you replace the probe, so that the readings stay accurate. You need **pH 4 and pH 7 buffer solutions**.

1. In the app, open your grow system and tap **Calibrate pH sensor**.
2. Rinse the probe with distilled or deionised water, put it in one of the buffers and stir gently for 30 seconds.
3. Tap the button for that buffer, **Take pH 4 reading** or **Take pH 7 reading**, and leave the probe still in the solution until the app confirms the reading.
4. Rinse the probe and repeat with the other buffer.

The app then saves the calibration and reports the **probe health** as a percentage of a new probe. Above 90 % the probe is fine. Between 80 and 90 % it is ageing, so plan to replace it. Below 80 % it is worn: replace it, or clean it and calibrate again with fresh buffers.

If you have touched the glass electrode, leave the probe in storage solution or pH 4 buffer for 24 hours before calibrating.
