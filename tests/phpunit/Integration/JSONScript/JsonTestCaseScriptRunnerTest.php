<?php

namespace SD\Tests\Integration\JSONScript;

use CreatePageHooks;
use MediaWiki\MediaWikiServices;
use SMW\Tests\Integration\JSONScript\JSONScriptTestCaseRunnerTest;

/**
 * @group SD
 * @group SMWExtension
 */
class JsonTestCaseScriptRunnerTest extends JSONScriptTestCaseRunnerTest {

	protected function setUp(): void {
		parent::setUp();

		// register the #createpage parser function
		$parser = MediaWikiServices::getInstance()->getParser();
		CreatePageHooks::setupParserFunction( $parser );
	}

	protected function getTestCaseLocation() {
		return __DIR__ . '/TestCases';
	}

	protected function getPermittedSettings() {
		return array_merge( parent::getPermittedSettings(), [] );
	}

}
