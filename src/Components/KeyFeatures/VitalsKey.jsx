import React from 'react'
const VtrackKey = () => {
    return (
        <>
            <div style={{ fontSize: '22px', marginRight: '150px', marginTop: '20px', color: 'grey' }}>
                <ul >
                    <li>The Device monitors temperature,SpO2 and heart rate.</li>
                    <li>Device size – 4cm (length) *4cm (width) *0.5-0.7cm (height)</li>
                    <li>The vitals information can be configured by the doctor in between
                        from the range of every 15Mins to 24Hrs.</li>
                    <li>Device wakes up on press button and shows data immediately via app.</li>
                    <li>Low battery alerts starting at 20% and 10% battery remaining, sync everything and then notifying
                        person that data can be lost once device switches off. Same notification should be sent to app as well</li>
                    <li>The device battery will last up to 3 months on single charge</li>
                    <li>The device is EMC, EMI compliant.</li>
                    <li>The HMI (Human machine interaction) of the device is more user-friendly.
                        The LED indication is given, so that the user will identify that the device is on
                        and sending readings to the associated app. It will also show the battery is low</li>
                    <li>The device can transmit data up to 50m range in an open field.</li>
                    <li>Device battery will last for 500 - 600 charge cycles. (2 years)</li>
                    <li>Portable charger will be given along with the device.</li>

                </ul>
            </div>
        </>
    )
}
export default VtrackKey