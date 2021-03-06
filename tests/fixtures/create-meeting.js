module.exports = `<?xml version="1.0" encoding="ISO-8859-1"?>
<serv:message xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <header>
    <securityContext>
      <webExID>testuser</webExID>
      <password>password123</password>
      <siteId>tester</siteId>
    </securityContext>
  </header>
  <body>
    <bodyContent xsi:type="java:com.webex.service.binding.meeting.CreateMeeting">
      <metaData>
        <confName>Sample Meeting</confName>
        <meetingType>1</meetingType>
        <agenda>Test</agenda>
      </metaData>
      <participants>
				<maxUserNumber>4</maxUserNumber>
				<attendees>
					<attendee>
						<person>
							<email>JKirk@sz.webex.com</email>
							<name>James Kirk</name>
						</person>
					</attendee>
				</attendees>
      </participants>
      <schedule>
        <startDate>05/31/2004 10:10:10</startDate>
        <openTime>900</openTime>
        <joinTeleconfBeforeHost>true</joinTeleconfBeforeHost>
        <duration>20</duration>
        <timezoneID>4</timezoneID>
      </schedule>
			<remind>
				<emails>
					<email>test@test.com</email>
					<email>test2@test.com</email>
				</emails>
				<sendEmail>true</sendEmail>
			</remind>
			<tracking>
				<trackingCode1>trackSig1</trackingCode1>
				<trackingCode2>trackSig3</trackingCode2>
			</tracking>
			<assistService>
				<assistRequest>Live Event Support</assistRequest>
			</assistService>
    </bodyContent>
  </body>
</serv:message>`.replace(/(\r\n|\n|\r|\t|\s{2,})/gm, '');
// Remove tabs/spaces 2 or more/new line break
