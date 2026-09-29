---
sidebar_position: 3
custom_edit_url: null
---

# Monitoring and troubleshooting

## What the status means

Each automation shows a status for every direction it controls.

| Status | Meaning |
| --- | --- |
| **Watching** | On and inside the range. Nothing to do. |
| **Correcting** | A session is running. Rounds are 24 minutes apart (5 minutes for refills), so this takes a while. |
| **Needs attention** | The automation has stopped and will not dose again until you re-arm it. The reason is shown underneath. |
| **Off** | Switched off, or no pump assigned to this direction. |
| **Waiting for device** | Switched on, but the device has not confirmed yet. |

**Recent sessions** lists every correction from the last 30 days with its outcome: *Corrected*, *Needs attention*, *Interrupted by restart* (a power cut or restart during the session) or *Stopped — settings changed* (you saved changes during the session). Pull down to refresh the list.

## When it needs attention

| Reason shown | Check | Then |
| --- | --- | --- |
| **Ran out of attempts before reaching the target** | Is the supply bottle empty? Is the hose end in the liquid, and the tubing free of air? Is the dose large enough for your tank? | Fix the cause, or raise **Dose per round**. Tap **Re-arm this rule**. |
| **A pump or valve failed to run** | Run the pump by hand from **Pumps**. Does it turn, and does liquid come out? | Check the pump, its tubing and the outlet it is plugged into. Re-arm. |
| **A sensor reading became unreliable** | The device got no reading from this sensor for 12 minutes. Is the probe plugged in and under water? | Fix the probe, calibrate it if needed, and re-arm. |

After re-arming, the automation verifies the reading for the full verify window before it doses again.

## Nothing is being dosed

Work through this list from the top.

1. **It is still verifying.** A correction starts 20 minutes after the value leaves the band, and 20 minutes after you switch the automation on.
2. **The water level is too low.** If the level is below **Ignore readings below**, the screen says so and nothing is corrected. Refill, or lower the limit if the probe is still under water.
3. **The reading is old.** The app shows when the value was last updated. Readings are trusted for 4 minutes. If they are older, the device is not reporting: check its indicator light and Wi-Fi.
4. **Your changes have not reached the device.** A banner says *Waiting for the device* while the device is offline. It keeps running its previous settings until it reconnects, then your changes apply on their own.
5. **The direction is off.** In pH and EC Control, each direction has its own switch and needs a pump.
6. **The device restarted while the value was out of range.** After a restart, a value that is still out of range does not trigger a new correction by itself. Use **Manual run**, or switch the automation off and on again.

## Changing settings

Saving changes stops any session in progress and restarts the automation as if you had just switched it on, verify window included. The on/off switch works immediately and does not need saving. Switching an automation off stops its session, but a dose that is already running finishes first.

## Running a session by hand

Each automation has a **Manual run** section. It starts one session right now, even if the value is inside the band, and it skips the water level check. All dose sizes, round budgets and other limits still apply. You should not need it in normal use, but it is a convenient way to test a fresh setup.

## Getting notified

Automation does not send notifications on its own. To get a push notification when a value leaves a range, set alarm thresholds: open your grow system, tap the gear icon, then **Notification thresholds**. Put the alarm just outside your target band, so you hear about it when automation cannot keep up, for example because a bottle has run dry. An alarm for the same sensor is sent at most once every 12 hours.
