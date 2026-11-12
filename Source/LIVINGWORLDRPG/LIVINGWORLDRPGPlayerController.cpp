// Copyright Epic Games, Inc. All Rights Reserved.


#include "LIVINGWORLDRPGPlayerController.h"
#include "EnhancedInputSubsystems.h"
#include "Engine/LocalPlayer.h"
#include "InputMappingContext.h"
#include "LIVINGWORLDRPGCameraManager.h"
#include "Blueprint/UserWidget.h"
#include "LIVINGWORLDRPG.h"
#include "Widgets/Input/SVirtualJoystick.h"

ALIVINGWORLDRPGPlayerController::ALIVINGWORLDRPGPlayerController()
{
	// set the player camera manager class
	PlayerCameraManagerClass = ALIVINGWORLDRPGCameraManager::StaticClass();
}

void ALIVINGWORLDRPGPlayerController::BeginPlay()
{
	Super::BeginPlay();

	
	// only spawn touch controls on local player controllers
	if (IsLocalPlayerController() && ShouldUseTouchControls())
	{
		// spawn the mobile controls widget
		MobileControlsWidget = CreateWidget<UUserWidget>(this, MobileControlsWidgetClass);

		if (MobileControlsWidget)
		{
			// add the controls to the player screen
			MobileControlsWidget->AddToPlayerScreen(0);

		} else {

			UE_LOG(LogLIVINGWORLDRPG, Error, TEXT("Could not spawn mobile controls widget."));

		}

	}
}

void ALIVINGWORLDRPGPlayerController::SetupInputComponent()
{
	Super::SetupInputComponent();

	// only add IMCs for local player controllers
	if (IsLocalPlayerController())
	{
		// Add Input Mapping Context
		if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(GetLocalPlayer()))
		{
			for (UInputMappingContext* CurrentContext : DefaultMappingContexts)
			{
				Subsystem->AddMappingContext(CurrentContext, 0);
			}

			// only add these IMCs if we're not using mobile touch input
			if (!ShouldUseTouchControls())
			{
				for (UInputMappingContext* CurrentContext : MobileExcludedMappingContexts)
				{
					Subsystem->AddMappingContext(CurrentContext, 0);
				}
			}
		}
	}
	
}

bool ALIVINGWORLDRPGPlayerController::ShouldUseTouchControls() const
{
	// are we on a mobile platform? Should we force touch?
	return SVirtualJoystick::ShouldDisplayTouchInterface() || bForceTouchControls;
}
