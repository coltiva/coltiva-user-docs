---
sidebar_position: 1
custom_edit_url: null
---

# How automation works

Coltiva can hold your reservoir's pH, nutrient strength (EC) and water level for you. You choose the range each value should stay in. When a reading drifts out of it, the device doses in small, measured rounds until the value is back.

## The correction cycle

Every automation runs the same loop:

1. **Read.** The device reads its sensors about every 4 minutes.
2. **Verify.** A reading has to stay out of range for 20 minutes before anything is dosed. A single odd reading, such as an air bubble on the probe, never triggers a dose. The same wait applies right after you switch an automation on.
3. **Dose one round.** A small, fixed amount. For a 100 L tank the recommended pH dose is 15 ml.
4. **Wait, then read again.** The device waits 24 minutes for the dose to mix (5 minutes for a water refill), then takes a fresh reading.
5. **Stop or repeat.** Back inside the range: the session is *Corrected* and the automation goes back to watching. Still outside: the next round is dosed, up to the maximum number of rounds you allow. If the whole budget is used and the value has still not recovered, the automation stops and shows *Needs attention* until you have had a look.

A correction takes a while by design. Every round is checked against a real reading, never a timer, and that is what keeps it from overshooting.

## Built-in limits

- **A session can never dose more than** *dose per round × maximum rounds*. The app shows this amount before you save.
- **pH and EC corrections only start when the probes are under water.** You set the water level below which readings are ignored.
- **Diluting stops when the tank is 90 % full**, whatever EC says.

## It runs on the device

The rules run on the Coltiva device itself, not in the cloud. If your Wi-Fi drops, automation keeps holding your targets. You only lose the live readings and app control until the connection is back.

After a power cut or restart, the device starts up watching again. A correction that was in progress is abandoned and appears in the history as *Interrupted by restart*.

:::note
If a value is still out of range after a restart, the automation does not start a new correction by itself. Start one with **Manual run** on the automation's screen, or switch the automation off and on again.
:::

## The three automations

Dosing pumps are the peristaltic pumps, volume pumps the centrifugal ones.

| Automation | Keeps | Pumps it needs |
| --- | --- | --- |
| **pH Control** | pH inside a band | A pH Down dosing pump, a pH Up dosing pump, or both |
| **EC Control** | Nutrient strength inside a band | One dosing pump per nutrient part. Optionally a fresh-water volume pump, to dilute when EC is too high |
| **Water Level** | The level between a refill point and a full point | A fresh-water volume pump |

Each automation is set up and switched on separately. You can start with pH alone and add the others later.
