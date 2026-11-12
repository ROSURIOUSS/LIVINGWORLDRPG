// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;

public class LIVINGWORLDRPG : ModuleRules
{
	public LIVINGWORLDRPG(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

		PublicDependencyModuleNames.AddRange(new string[] {
			"Core",
			"CoreUObject",
			"Engine",
			"InputCore",
			"EnhancedInput",
			"AIModule",
			"StateTreeModule",
			"GameplayStateTreeModule",
			"UMG",
			"Slate"
		});

		PrivateDependencyModuleNames.AddRange(new string[] { });

		PublicIncludePaths.AddRange(new string[] {
			"LIVINGWORLDRPG",
			"LIVINGWORLDRPG/Variant_Horror",
			"LIVINGWORLDRPG/Variant_Horror/UI",
			"LIVINGWORLDRPG/Variant_Shooter",
			"LIVINGWORLDRPG/Variant_Shooter/AI",
			"LIVINGWORLDRPG/Variant_Shooter/UI",
			"LIVINGWORLDRPG/Variant_Shooter/Weapons"
		});

		// Uncomment if you are using Slate UI
		// PrivateDependencyModuleNames.AddRange(new string[] { "Slate", "SlateCore" });

		// Uncomment if you are using online features
		// PrivateDependencyModuleNames.Add("OnlineSubsystem");

		// To include OnlineSubsystemSteam, add it to the plugins section in your uproject file with the Enabled attribute set to true
	}
}
