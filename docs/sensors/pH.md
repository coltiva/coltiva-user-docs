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

## Storage

The glass of the pH probe must stay wet. Whenever the probe is out of the reservoir for more than an hour or two, and whenever you [take the system down](../taking-the-system-down.md), fill its cap with storage solution and push the cap on. Keep the probe at room temperature.

**Which solution.** Use a pH probe storage solution. These are made of about 3 mol/l potassium chloride (KCl), sometimes with pH 4 buffer added, and are the right choice for anything longer than a few days. The probe's reference electrode is filled with concentrated KCl, so in storage solution it neither gains nor loses electrolyte, its junction stays clear and the glass stays hydrated. The probe then responds as quickly after storage as before.

pH 4 buffer is the usual stand-in. It keeps the glass hydrated too, and because it is acidic little grows in it, so it is fine for days or a few weeks. But it holds far fewer ions than the reference, so over months the reference electrolyte slowly diffuses out into it and the probe becomes slow and drifts. pH 7 buffer is worse on both counts: fewer ions still, and mould grows in it. Never store the probe in pure water (distilled, deionised or reverse osmosis). It pulls ions out of the glass and the reference and can ruin the probe.

:::tip
Out of storage solution? Dissolve 10 g of KCl in 100 ml of pH 4 buffer. That is what some manufacturers sell as storage solution.
:::

Replace the solution in the cap once a year, and whenever it looks cloudy. A probe that has dried out is not necessarily lost: soak it in storage solution for 24 hours, then calibrate it. If it is still slow, or the app reports it as worn, replace it.

## Calibration
Calibrate at least every 3 months, and whenever you replace the probe, so that the readings stay accurate. You need **pH 4 and pH 7 buffer solutions**.

1. In the app, open your grow system and tap **Calibrate pH sensor**.
2. Rinse the probe with distilled or deionised water, put it in one of the buffers and stir gently for 30 seconds.
3. Tap the button for that buffer, **Take pH 4 reading** or **Take pH 7 reading**, and leave the probe still in the solution until the app confirms the reading.
4. Rinse the probe and repeat with the other buffer.

The app then saves the calibration and reports the **probe health** as a percentage of a new probe. Above 90 % the probe is fine. Between 80 and 90 % it is ageing, so plan to replace it. Below 80 % it is worn: replace it, or clean it and calibrate again with fresh buffers.

If you have touched the glass electrode, leave the probe in storage solution or pH 4 buffer for 24 hours before calibrating.
