---
sidebar_position: 2
custom_edit_url: null
---

# Set up automation

## Before you start

- **Mount the pumps and route the hoses** so that nothing can siphon. See [Pumps](../pumps.mdx).
- **Calibrate every pump you will use.** Uncalibrated pumps cannot be chosen for automation. See [Calibrating a pump](../pumps.mdx#calibrating-a-pump).
- **Calibrate the pH sensor** if you will use pH Control. See [pH](../sensors/pH.md#calibration).
- **Mount the water level sensor.** Water Level and diluting need it, and pH and EC Control use it to make sure the probes are under water.
- **Check that the app shows readings** from your device. The **Automation** button only appears once it does.

## Step 1: Tell the app about your tank

Open your grow system in the app and tap **Automation**. The first time, it asks for two things:

- **Reservoir volume**, in litres. Roughly is fine. Dose sizes and round budgets are scaled from it.
- **Highest acceptable water level**, in cm from the tank bottom. Every water level setting is derived from it.

Tap **Save tank details**.

:::note
Changing these later does not resize automations you have already created. It only changes the recommended values for new ones.
:::

## Step 2: Add an automation

Tap **Add automation** and pick **pH Control**, **EC Control** or **Water Level**. The app fills in recommended values for your tank size. Usually you only need to:

1. Set the target band (or the refill points).
2. Choose the pump for each direction. Pumps are listed by outlet number, so note which outlet each hose is connected to.
3. Check the lines *Most it can add in one session* and *Longest a session can run*.
4. Tap **Create automation**.

The switch at the top of the screen decides whether the automation starts straight away. Once it is on, the device verifies the reading for 20 minutes before its first dose.

Repeat for each automation you want. They are independent: you can run pH Control alone, or all three together.

## pH Control

Holds pH inside a band. The two directions are separate. **pH Down** doses when pH rises above the band, **pH Up** when it drops below. Use one direction or both, depending on which way your solution drifts.

| Setting | What it does | Recommended (100 L tank) |
| --- | --- | --- |
| **Target band** | The range pH may move in. A correction starts when pH leaves it. | 5.6 – 6.2 |
| **pH Down pump**, **pH Up pump** | The outlet each adjuster is connected to. A direction without a pump stays off. | |
| **Dose per round** | Amount of adjuster in each round. Set separately per direction. | 15 ml |
| **Maximum rounds per session** | How many rounds before the automation gives up and asks for a look. | 20 |
| **Ignore readings below** | Water level under which nothing is corrected. Set it a little above where the probe sits. | 40 % of your highest level |

## EC Control

Holds EC inside a band. When EC drops below the band, nutrient concentrate is dosed. If you have a fresh-water pump, EC Control can also dilute when EC rises above the band.

| Setting | What it does | Recommended (100 L tank) |
| --- | --- | --- |
| **Target band** | The range EC may move in. | 1.4 – 2.2 mS/cm |
| **Nutrients to dose** | One pump per nutrient part. Multi-part stocks are dosed together every round, each in its own amount. | |
| **Dose per round** | Amount of each part per round. | 25 ml per part |
| **Maximum rounds per session** | Rounds before the automation gives up. | 12 |
| **Fresh water pump** (optional) | Turns on diluting. Needs the water level sensor. | |
| **Water per round** | Fresh water per round when diluting. | 2 L |
| **Only when tank is below** | Diluting only starts under this level, so there is room for the water. | 80 % of your highest level |
| **Ignore readings below** | As for pH Control. | 40 % of your highest level |

A diluting session can never add more than 15 % of your reservoir volume, and stops when the tank reaches 90 % full.

## Water Level

Tops up the reservoir with fresh water as the plants drink and water evaporates. This keeps the probes under water and stops the nutrient solution from concentrating.

| Setting | What it does | Recommended (100 L tank) |
| --- | --- | --- |
| **Refill below** | The level that starts a refill. | 30 % of your highest level |
| **Refill to** | The level it fills up to. Filling past the trigger keeps the pump from cycling on and off. | 90 % of your highest level |
| **Fresh water pump** | The volume pump in your fresh-water tank. | |
| **Water per round** | Water per refill round. | 5 L |
| **Maximum rounds per session** | Rounds before the automation gives up. | 15 |

:::warning
A refill is only as safe as the water level sensor. If the sensor comes loose or reads wrong, one session can still add *water per round × maximum rounds* before it stops. Size your fresh-water tank, or the maximum rounds, so that one full session cannot overflow the reservoir.
:::

## Advanced settings

The recommended values suit most setups. If you do change them:

- **Wait between rounds** (pH and EC: 24 min; Water Level: 5 min). Time for a dose to mix before the next reading. A shorter wait risks dosing again against a correction that is already under way. It cannot be shorter than 4 minutes, the age at which a reading stops being trusted.
- **Verify before dosing** (pH and EC: 20 min; Water Level: 10 min). How long the value must stay out of range before a correction starts at all.
- **Deadband** (pH and EC, under *Target band, Advanced*). A correction continues until the value is this far back inside the band, so that it does not hover on the edge. Default 0.2.
- **Check the water level first** (pH and EC, under *Water level limit, Advanced*). Turn this off only if you have no water level sensor. You must then keep the probes under water at all times: a probe reading air can trigger unwanted dosing.
