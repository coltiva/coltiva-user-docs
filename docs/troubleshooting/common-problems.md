---
sidebar_position: 1
custom_edit_url: null
---

# Common problems

Find your symptom and work through the checks in order. For automation, see [Monitoring and troubleshooting](../automation/monitoring-and-troubleshooting.md).

## Setting up

| Problem | What to check |
| --- | --- |
| The app cannot reach the device | The logo must show the setup-mode pattern: bright, with a dark pause every few seconds. A steady glow means the device is already set up, so [reset it](./reset-the-device.md). Keep the phone close to the device and make sure its Wi-Fi is on. |
| The device finds no networks, or not mine | The device only joins **2.4 GHz** networks. Move it closer to the router and tap **Rescan**. |
| The password was not accepted | Tap **Try again** and enter it once more. Passwords have at least 8 characters. |
| Setup finished, but the app shows no readings | Wait 30 seconds and pull down to refresh. The first readings take one measurement cycle. |

## Readings

| Problem | What to check |
| --- | --- |
| *No recent readings*, although the logo glows steadily | The device is running but not reaching the cloud. Check your router and internet connection. The device reconnects on its own, and automation keeps running meanwhile. |
| pH reads wrong or drifts | Is the probe under water? Calibrate it: [pH](../sensors/pH.md#calibration). If you touched the glass electrode, leave the probe in storage solution for 24 hours first. Replace a probe the app reports as worn. |
| EC reads wrong | Clean the metal tips and calibrate: [EC](../sensors/EC.md). |
| Water level reads wrong or is missing | The sensor must be glued flat to the tank bottom, straight, with the tank supported so its bottom does not bulge. See [Water level sensor](../sensors/level.md). |

## Pumps

| Problem | What to check |
| --- | --- |
| A pump will not run from the app | It must be [calibrated](../pumps.mdx#calibrating-a-pump) first. *The device didn't respond*: the device is offline. Pumps run one at a time, so wait for another run to finish. |
| The amount is refused | A run may last at most 20 minutes. Split larger amounts into several runs. |
| Liquid keeps flowing after the pump has stopped | Siphoning. Reroute the hoses as shown in [Avoiding siphoning](../pumps.mdx#avoiding-siphoning). |
| Doses are too small or too large | Recalibrate the pump with the tubing already full of liquid. |
| The circulation pump stops now and then | Normal. It pauses for about 30 seconds while the sensors are read, roughly every 4 minutes, and whenever another pump runs. |

## Notifications

| Problem | What to check |
| --- | --- |
| No alarm although a value is out of range | Alarms are switched on per sensor under **Notification thresholds**. An alarm for the same sensor repeats at most every 12 hours. Only the phone you logged in on most recently receives alarms. On Android, the *Sensor alarms* notification channel must be allowed. |

## The device restarted by itself

The device updates its own software when a new version is released, and restarts afterwards. Wi-Fi settings, calibrations and automations are kept. A correction that was running is listed as *Interrupted by restart* in the automation history.
